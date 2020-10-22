const path = require('path');
const NamingStrategy = require('../db/TypeormNamingStrategy');

require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
  type: process.env.DB_SYSTEM,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: ['query', 'error', 'schema'],
  entities: [path.join(__dirname, '../db/entities', '*.js')],
  namingStrategy: new NamingStrategy(),
};
