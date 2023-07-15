"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(User, { foreignKey: "friendsId" });
    }
  }
  Friend.init(
    {
      userId: DataTypes.INTEGER,
      friendsId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Friend",
    }
  );
  return Friend;
};
