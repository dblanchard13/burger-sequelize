module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", 
  {
      burger_name: 
      {
          type: DataTypes.STRING
      },
      devoured:
      {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
  }//,
    // {
    //   // We're saying that we want our Author to have Posts
    //   classMethods: 
    //   {
    //     associate: function(models) 
    //     {
    //       Burger.belongsTo(models.Eater, 
    //       {
    //         foreignKey: 
    //         {
    //           allowNull: false
    //         }
    //       });
    //     }
    //   }
    // }
    );
  return Burger;
};
