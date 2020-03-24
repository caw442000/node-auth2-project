const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', (req, res) => {
  const department = req.decodedToken.department
  Users.findBy({ department })
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({errorMessage: `Unable to get users: ${err}`});
  });
})

module.exports = router;
