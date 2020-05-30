import transporter from '@config/node-mailer/index';
function response(error, info) {
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
}

function sendContactEmail(req, response) {
  const { email, message, name } = req.body;

  const mailOptions = {
    to: 'eric.q.sanchez@gmail.com',
    subject: `Info request from ${name}`,
    html: `
    <div>
      <span>You have a new message from <strong>${name}</strong></span>
      <p><strong><i>${message}</i></strong></p>
      <span> Reply to <strong>${name}</strong> back at: <strong>${email}</strong></span>
    </div>`
  };

  const mailRecieptOptions = {
    to: email,
    subject: `Thanks for getting in touch ${name}`,
    html: `
    <div>
      <span>Hi ${name},<span>
      <p>I just got your message:</p>
      <p><strong><i>${message}</i></strong></p>
      <p> Well, my inbox did. Me, the real me - the current me, not the past me writing this reply
      needs a minute to read this and get back to you - or you know <i>future you...</i></p>
      <p>...we'll talk.</p>
      Best,<br/>
      Eric
    </div>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    response(error, info);
  });

  transporter.sendMail(mailRecieptOptions, (error, info) => {
    response(error, info);
  });
}

module.exports = {
  sendContactEmail
};
