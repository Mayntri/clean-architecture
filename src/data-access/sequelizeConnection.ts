import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const sequelizeConnection = new Sequelize(process.env.DATABASE_URL || '', {
  logging: !process.env.DB_LOGGING ? console.log : false,
});

export default sequelizeConnection;
