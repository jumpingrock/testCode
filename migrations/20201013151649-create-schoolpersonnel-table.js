'use strict';

import {DataTypes} from "sequelize";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('school_personnel', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: new DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      role: {
        type: new DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('school_personnel');
  }
};
