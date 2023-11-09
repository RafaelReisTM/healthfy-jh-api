// const express = require('express');

// const router = express.Router();

const entryService = require('../services/data.service');

// router.get('/entries', async (req, res) => {
//   const entries = await entryService.getAllEntries();
//   res.send(entries);
// });

const getAll = async (_req, res) => {
  try {
    const entries = await entryService.getAll();
    return res.status(200).json(entries);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  getAll,
};