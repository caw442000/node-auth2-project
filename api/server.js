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

server.use('/api', authRouter);

server.use ('/api/users', restricted, checkRole('HR'), usersRouter)


server.get('/', (req, res) => {
  res.status(200).json({ message: 'api up'})
})
module.exports = server;

// function checkDepartment(department) {
//   return (req, res, next) => {
//     if(req.decodedToken) {
//         next();
//     } else {
//       res.status(403).json({ errorMessage: 'Not apart of the correct department'});

//     }
//   }
// }

function checkRole(department) {
  return (req, res, next) => {
    if( req.decodedToken && 
      req.decodedToken.department && req.decodedToken.department.toLowerCase() === department.toLowerCase()) {
        console.log(req.decodedToken.department)

        next();
    } else {
      console.log(req.decodedToken.department.toLowerCase())

      res.status(403).json({ you: 'You shall not pass!'});
    }
  };
}