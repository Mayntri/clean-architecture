import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize(process.env.DATABASE_URL || '', {
  logging: process.env.NODE_ENV === "development",
});

export default sequelizeConnection;
