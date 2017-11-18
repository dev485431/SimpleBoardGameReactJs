const express = require("express");
const path = require('path');
const axios = require("axios");
const bodyParser = require('body-parser');


const server = axios.create({
  baseURL: 'http://localhost:3001'
});

module.exports = (app, dir) => {
  "use strict";

  app.use("/public", express.static(path.join(dir, 'public')));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.sendFile(path.join(dir, 'public', 'index.html'));
  });

  return app;
};
