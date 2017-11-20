const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');

const STATS_PATH = "/stats";

module.exports = (app, dir) => {
  "use strict";

  app.use("/public", express.static(path.join(dir, 'public')));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.sendFile(path.join(dir, 'public', 'index.html'));
  });

  // stats
  app.post(STATS_PATH, (req, res) => {
    res.json({
      id: Math.floor(Math.random() * (10000)) + 1,
      wasSuccessful: req.body.wasSuccessful,
      diceThrowCount: req.body.diceThrowCount,
      averageResult: req.body.averageResult
    });
  });

  return app;
};
