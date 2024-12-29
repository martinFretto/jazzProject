import { Sequelize } from 'sequelize';


const sequelize = new Sequelize(process.env.PG_URL, {
  dialect: 'postgres',
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true,
  },
});

export {sequelize}