import Sequelize, { Model } from 'sequelize';

export default class Teacher extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 150],
              msg: 'Nome deve ter entre 3 e 150 caracteres!',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email já existe!',
          },
          validate: {
            isEmail: {
              msg: 'Email invalido!',
            },
          },
        },
        phone_number: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Telefone já existe!',
          },
          validate: {
            len: {
              args: [10, 18],
              msg: 'Telefone invalido!',
            },
          },
        },
      },
      {
        sequelize,
        paranoid: true,
      },
    );
    return this;
  }
}
