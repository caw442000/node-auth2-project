const knex = require('knex');

cont knexConfig = require('../knexfile.js')

const environment = process.env.DB_ENV || 'development';


module.exports = knex(knexConfig[environment])