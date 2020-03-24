const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets.js')

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if(authorization) {
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
      if(err) {
        console.log(authorization, jwtSecret)
        res.status(401).json({ message: 'Invalid Credentials'})
      } else {
        req.decodedToken = decodedToken;
        console.log(`decodedtoken after middleware: ${req.decodedToken.department}`)
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No Credentials provided'})
  }
};