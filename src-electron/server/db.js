const Sequelize = require('sequelize');

const path = require('path');
const dbPath =
  process.env.NODE_ENV === 'production'
    ? path.join(path.dirname(process.execPath), 'abbreviations.db')
    : path.join(__dirname, 'abbreviations.db');

console.log(`Using database path: ${dbPath}`);
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
});

module.exports = sequelize;
