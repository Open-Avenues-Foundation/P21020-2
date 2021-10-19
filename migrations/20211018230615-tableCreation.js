'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false
      },
      messageStatus: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },

      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },

      deletedAt: { type: Sequelize.DATE }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messages')
  }
}
