import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
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
        teacher_id: {
          type: Sequelize.INTEGER,
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
        cpf: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'CPF já existe!',
          },
          validate: {
            isCpf(value) {
              if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(value)) {
                throw new Error('CPF inválido!');
              }
            }
          },
        },
        level: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [2],
              msg: 'Level invalido!',
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

  static associate(models) {
    this.belongsTo(models.Teacher, { foreignKey: 'teacher_id' });
  }
}
