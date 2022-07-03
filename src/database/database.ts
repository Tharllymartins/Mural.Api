import { Sequelize } from 'sequelize';


export const database = new Sequelize('postgres://mural:muralocal@localhost:5432/mural');

try {
    database.authenticate().then(() => console.log('Connection has been established successfully.'))
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }