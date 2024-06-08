const express = require('express');
const router = express.Router();
const { getAbbreviations } = require('../controllers/getAbbreviations.js');
// Маршрут для получения одного пользователя по ID
router.get('/', getAbbreviations)
module.exports = router;