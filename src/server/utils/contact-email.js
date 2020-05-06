var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.REACT_APP_EMAIL_FROM,
    pass: process.env.REACT_APP_EMAIL_PASSWORD
  }
});

var mailOptions = {
  from: 'process.env.REACT_APP_EMAIL_FROM',
  to: 'eric.q.sanchez@gmail.com',
  subject: 'Look what I can do',
  text: 'Dane Dane so hot!'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
