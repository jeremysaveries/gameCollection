import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database-client.js";

class Genre extends Model {}

Genre.init(
  {
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    // Je passe la connexion à ma base de données
    sequelize,
    tableName: "genres",
  }
);

export default Genre;
