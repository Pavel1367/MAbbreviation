const express = require('express');
const sequelize = require('./db.js');
const cors = require('cors');
const router = require('./routes/index.js');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/abbreviation', router);

const start = async () => {
  try {
    console.log('Attempting to authenticate with the database...');
    await sequelize.authenticate();
    console.log('Database authenticated successfully.');

    console.log('Attempting to sync the database...');
    await sequelize.sync();
    console.log('Database synced successfully.');

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
   
    });
  } catch (e) {
    console.error('An error occurred:', e);
  }
};

start();
