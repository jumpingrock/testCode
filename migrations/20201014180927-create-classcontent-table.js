'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('class_content', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      subjectCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      subjectName: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      classCode: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      className: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      teacherId: {
        type: Sequelize.INTEGER,
        references: { model: 'SchoolPersonnelDBModel', key: 'id' },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('class_content');

  }
};
