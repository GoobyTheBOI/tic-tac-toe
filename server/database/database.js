const mysql = require('mysql2');
const env = require('dotenv').config();

const pool = mysql.createPool({
  host: env.parsed.MYSQL_HOST,
  user: env.parsed.MYSQL_USERNAME,
  password: env.parsed.MYSQL_PASSWORD,
  database: env.parsed.MYSQL_DATABASE,
}).promise();

pool.getConnection().then(() => console.log("Connected to database")).catch(err => console.log(err));

module.exports = pool;