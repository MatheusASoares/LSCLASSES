import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Teacher from '../models/Teacher';
import Student from '../models/Student';

const models = [User, Teacher, Student];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
