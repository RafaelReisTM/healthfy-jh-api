require('dotenv').config();
const express = require('express');

const app = express();
const entryRouter = require('./routes/routes');

// Access Control
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(express.json());

app.use('/', entryRouter);

module.exports = app;

// require('dotenv').config();
// const express = require('express');

// const app = express();
// // const router = require('./routes/routes');

// // Access Control
// app.use((_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Access-Control-Allow-Headers', '*');
//   next();
// });

// app.use(express.json());

// // app.use('/entries', router);
// const db = require('./database/db');

// app.get('/entries', async (req, res) => {
//   // const [rows] = await db.query('SELECT * FROM healthfy.data')
//   //   .catch((err) => console.log(err));
//   //   return res.status(200).json(entries)
//   try {
//     const [entries] = await db.query('SELECT * FROM healthfy.data')
//       .catch((err) => console.log(err));
//     return res.status(200).json(entries);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

// module.exports = app;
