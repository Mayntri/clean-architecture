require('dotenv').config()

const parseDbUrl = require("parse-database-url");

const dbConfig = parseDbUrl(process.env.DATABASE_URL)

module.exports = {
  development: {
    database: dbConfig.database,
    username: dbConfig.user,
    host: dbConfig.host,
    dialect: dbConfig.driver,
    logging: false,
  },
  test: {
    database: dbConfig.database,
    username: dbConfig.user,
    host: dbConfig.host,
    dialect: dbConfig.driver,
    logging: false,
  },
  production: {
    database: dbConfig.database,
    username: dbConfig.user,
    host: dbConfig.host,
    dialect: dbConfig.driver,
    logging: false,
  },
};