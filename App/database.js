import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.PG_url, {
    define: {
        underscored: true,
    },
    logging: console.log,
})

export default sequelize; 