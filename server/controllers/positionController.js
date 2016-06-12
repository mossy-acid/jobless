const schedule = require('node-schedule');
const sendEmail    = require('../helpers/email');
const Position = require('../models/positionModel');

module.exports = {
  get: (req, res) => {
    Position.get(req.params.id, (err, data) => {
      if (err) throw err;
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.send(data);
    });
  },
  post: (req, res) => {
    console.log('data?', req.body);
    Position.post(req.body, (err,data) => {
      if (err) throw err;
      res.status(201);
      res.send(data);
    });
  },
  put: (req, res) => {
    Position.put(req.body, (err, data) => {
      if (err) throw err;

      // schedule email reminder for user
      let userEmail = req.user.email;
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      let message = `Don\'t forget to send a thank you message to ${data.dataValues.company}!`;
      schedule.scheduleJob(tomorrow, ((userEmail, message) => {
          sendEmail(userEmail, message);
        }).bind(null, userEmail, message)
      );

      res.status(201);
      res.send(data);
    });
  },
  remove: (req, res) => {
    Position.remove(req.body, (err, data) => {
      if (err) throw err;
      res.status(201);
      res.send(data);
    });
  }
};
