const Abbreviation = require('../models/models');
const { Op, literal } = require('sequelize');
const getAbbreviations = async (req, res) => {
  let {
    newSearchQuery,
    limit = 10,
    offset,
  } = req.query;
  
  newSearchQuery = newSearchQuery ? JSON.parse(newSearchQuery) : {}
  console.log(newSearchQuery)
  
  const whereConditions = [];
  try {
      if(newSearchQuery.query){
        whereConditions.push({ name: { [Op.like]: `%${newSearchQuery.query}%` } });
      }
      if(newSearchQuery.contentSearch){
        whereConditions.push(
          literal(`rus LIKE '%${newSearchQuery.query}%'`)
        );
        whereConditions.push(
          literal(`eng LIKE '%${newSearchQuery.query}%'`)
        );
      }

    const whereCondition = whereConditions.length > 0 ? { [Op.or]: whereConditions } : {};
    const abbreviations = await Abbreviation.findAndCountAll({
      where: whereCondition,
      limit: limit,
      offset: offset,
      order: [
        ['name', 'ASC'] // Вторичная сортировка по алфавиту, если необходимо
      ],
    });

    res.json({
      total: abbreviations.count,
      abbreviations: abbreviations.rows,
    });
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err);
  }
};

module.exports = {
  getAbbreviations,
};
