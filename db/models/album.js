'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    
    static associate({User,PhotoCard}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.hasMany(PhotoCard, {foreignKey: 'albumId'})
    }
  }
  Album.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    urlAlbum: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};