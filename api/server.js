const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan')
const cors = require('cors');


const authRouter = require('../auth/auth-router.js')
const usersRouter = require('../users/users-router.js');
const restricted = require('../auth/restricted-middleware.js')


const server = express();

server.use(helmet());
server.use(morgan('dev'))
server.use(express.json());
server.use(cors())

// server.use('/api/auth', authRouter);

//server.use ('/api/users', restricted, checkRole(''), usersRouter)


server.get('/', (req, res) => {
  res.status(200).json({ message: 'api up'})
})
module.exports = server;