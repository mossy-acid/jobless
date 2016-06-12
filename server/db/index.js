const Sequelize = require('sequelize');
const dbConfig = require('./config');
// Establish database connection
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig.config
);

const Event = sequelize.define('event', {
  company: Sequelize.STRING,
  description: Sequelize.STRING,
  interviewers: Sequelize.STRING,
  note: Sequelize.STRING,
  complete: Sequelize.BOOLEAN,
  emotion: Sequelize.STRING,
  start: Sequelize.DATE,
  end: Sequelize.DATE,
  followup: Sequelize.DATE,
  type: Sequelize.STRING,
  questions: Sequelize.STRING,
}, {
  freezeTableName: true,
});

const User = sequelize.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  googleID: Sequelize.STRING,
}, {
  freezeTableName: true,
});

const Position = sequelize.define('position', {
  title: Sequelize.STRING,
  company: Sequelize.STRING,
  description: Sequelize.TEXT,
  complete: Sequelize.BOOLEAN,
  endDate: Sequelize.DATE,
  jobURL: Sequelize.STRING,
  apply: Sequelize.BOOLEAN,
  notes: Sequelize.STRING,
  location: Sequelize.STRING,
}, {
  freezeTableName: true,
});


User.hasMany(Position);
Position.belongsTo(User);
Position.hasMany(Event);
Event.belongsTo(Position);
sequelize.sync();

module.exports = { User, Position, Event };
