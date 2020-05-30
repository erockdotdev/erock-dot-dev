import nodemailer from 'nodemailer';

/**
 * May need ot follow this SO to switch from Gmail as my node mailer service
 * https://stackoverflow.com/questions/25693280/nodemailer-with-gmail-service-not-working-on-heroku
 */

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.REACT_APP_EMAIL_FROM,
    pass: process.env.REACT_APP_EMAIL_PASSWORD
  }
});

export default transporter;
