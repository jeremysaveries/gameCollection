import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database-client.js";

class Library extends Model {}

Library.init(
  {
    added_game: {
      type: DataTypes.STRING,
    },
  },
  {
    // Je passe la connexion à ma base de données
    sequelize,
    tableName: "library",
  }
);

export default Library;
