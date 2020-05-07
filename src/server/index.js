import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/core/routes';
import renderer from './utils/renderer';
import createStore from './utils/create-store';
import proxy from 'express-http-proxy';
import bodyParser from 'body-parser';
import { sendContactEmail } from './utils/send-contact-email';

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
  const response = (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).send({
        message:
          'Unfortunately your request could not be processed, please try again',
        error
      });
    } else {
      console.log('Email sent: ' + info.response);
      res.send(info.response);
    }
  };

  const sendContach = sendContactEmail(req, response);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
