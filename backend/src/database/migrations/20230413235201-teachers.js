module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(
      'teachers',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true,
        },
        phone_number: {
          type: Sequelize.STRING(18),
          allowNull: false,
          unique: true,
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
      },
    ),

  async down(queryInterface) {
    await queryInterface.dropTable('teachers');
  },
};
