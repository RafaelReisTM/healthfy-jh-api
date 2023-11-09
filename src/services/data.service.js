const db = require('../database/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT * FROM healthfy.data')
    .catch((err) => console.log(err));
  return rows;
};

module.exports = {
  getAll,
};