module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'teachers',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING(18),
        allowNull: false,
        unique: true,
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true,
      },
      level: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        values: ['0', '1'],
        allowNull: false,
        defaultValue: '1',
        comment: '0 => inativo, 1 => ativo',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
    }),

  async down(queryInterface) {
    await queryInterface.dropTable('students');
  },
};
