'use strict';
module.exports = function(sequelize, DataTypes) {
  var Source = sequelize.define('Source', {
    name: DataTypes.STRING,
    customerAddress: DataTypes.STRING,
    contactAddress: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Source.hasMany(models.Order);
      }
    }
  });
  return Source;
};