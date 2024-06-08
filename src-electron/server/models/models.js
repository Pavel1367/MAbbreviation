const sequelize = require('../db.js');
const { DataTypes } = require('sequelize');

const Abbreviation = sequelize.define(
  'abbreviation',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    eng: {
      type: DataTypes.JSON,
    },
    rus: {
      type: DataTypes.JSON,
    },
  },
  { tableName: 'abbreviations', timestamps: false }
);

module.exports = Abbreviation;
