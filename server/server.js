
const app = require("./app");

const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');


module.exports = db = {};

initialize();

async function initialize() {

    const PORT = process.env.PORT || 3003;
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db = require('./models')(sequelize);

    // sync all models with database
    try {
      await sequelize.sync({ alter: true }); // To automatically creates/updates tables in the MySQL database to match the Sequelize model 
  
      app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('Error starting server:', error)
    }
}


