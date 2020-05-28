import transporter from '@config/node-mailer/index';

function sendContactEmail(req, response) {
  const { email, message, name } = req.body;

  const mailOptions = {
    from: email,
    to: 'eric.q.sanchez@gmail.com',
    subject: `Info request from ${name} | ${email}`,
    text: `You have a new message from ${name} | <p>${message}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    response(error, info);
  });
}

module.exports = {
  sendContactEmail
};
