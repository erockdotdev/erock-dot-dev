import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/core/routes';
import renderer from './utils/renderer';
import createStore from './utils/create-store';
import proxy from 'express-http-proxy';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    const userAgent = req.headers['user-agent'];
    return route.loadData ? route.loadData(store, userAgent) : null;
  });

  Promise.all(promises)
    .then(() => {
      const context = {};
      const content = renderer(req, store, context);
      if (context.url) {
        return res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
      }
      res.send(content);
    })
    .catch(error => {
      res.send(`${error}`);
    });
});
app.post('/contact', (req, res) => {
  console.log('req.body', req.body);
  const { email, message } = req.body;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_EMAIL_FROM,
      pass: process.env.REACT_APP_EMAIL_PASSWORD
    }
  });

  var mailOptions = {
    from: email,
    to: 'eric.q.sanchez@gmail.com',
    subject: `Info request from ${email}`,
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
