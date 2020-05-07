import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.REACT_APP_EMAIL_FROM,
    pass: process.env.REACT_APP_EMAIL_PASSWORD
  }
});

export default transporter;
