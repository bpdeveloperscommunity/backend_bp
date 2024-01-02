// mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bhaskarbabucm6@gmail.com',
    pass: 'gnqgfyqufkzwrjwg',
  },
});

module.exports = {
  sendEmail: async (to, subject, html) => {
    const mailOptions = {
      from: 'bhaskarbabucm6@gmail.com',
      to,
      subject,
      html,
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Email sending failed', error);
          reject(error);
        } else {
          console.log('Email sent:', info.response);
          resolve(info);
        }
      });
    });
  },
};
