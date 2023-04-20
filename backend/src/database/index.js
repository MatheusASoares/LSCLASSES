import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Teacher from '../models/Teacher';

const models = [User, Teacher];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
