const Messages = (connection, Sequelize,) => {
    return connection.define('messages', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      customerId: { type: Sequelize.STRING, allowNull: false, references: { model: Customers, key: 'id' } },
      messageContent: { type: Sequelize.STRING },
      dateCreated: { type: Sequelize.DATETIME},
      dateSent: { type: Sequelize.DATETIME},
      status: { type: Sequelize.ENUM('sent', 'read', 'delivered', 'failed')},
    }, { paranoid: true })
  }

module.exports = Messages
