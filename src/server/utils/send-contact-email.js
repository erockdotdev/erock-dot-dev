import transporter from '@config/node-mailer/index';

function sendContactEmail(req, response) {
  const { email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'eric.q.sanchez@gmail.com',
    subject: `Info request from ${email}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    response(error, info);
  });
}

module.exports = {
  sendContactEmail
};
