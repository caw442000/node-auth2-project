const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();



server.get('/', (req, res) => {
  res.status(200).json({ message: 'api up'})
})
module.exports = server;