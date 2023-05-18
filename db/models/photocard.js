'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhotoCard extends Model {
    
    static associate({Album}) {
      this.belongsTo(Album, {foreignKey: 'albumId'})
    }
  }
  PhotoCard.init({
    albumId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Albums",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    url: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'PhotoCard',
  });
  return PhotoCard;
};