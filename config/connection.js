// Imports constructor
const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

// JAWSDB_URL to deploy on Heroku
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Local Host requirements
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );
}

module.exports = sequelize;
