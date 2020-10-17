const path = require('path');
const NamingStrategy = require('./db/TypeormNamingStrategy');

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'secret',
  database: 'c_s_i',
  logging: ['query', 'error', 'schema'],
  entities: [path.join(__dirname, 'db/entities', '*.js')],
  namingStrategy: new NamingStrategy(),
};
