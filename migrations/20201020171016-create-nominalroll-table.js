'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('nominal_roll', {

      personnelId: {
        type: Sequelize.INTEGER,
        references: {model: 'SchoolPersonnel', key: 'id'}
      },
      classId: {
        type: Sequelize.INTEGER,
        references: {model: 'ClassContent', key: 'id'}
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('nominal_roll')
  }
};
