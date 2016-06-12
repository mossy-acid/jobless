const nodemailer = require('nodemailer');
// const router = require('express').Router();

module.exports = (userEmail, message) => {

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'jobappilyservices@gmail.com', // Your email id
      pass: 'applytoallofthethings' // Your password
    }
  });

  const mailOptions = {
    from: 'JobAppily<jobappilyservices@gmail.com>', // sender address
    to: userEmail, // list of receivers
    subject: 'Event Reminder', // Subject line
    text: message //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error){
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
};
