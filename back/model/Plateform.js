import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database-client.js";

class Platform extends Model {}

Platform.init(
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    // Je passe la connexion à ma base de données
    sequelize,
    tableName: "platforms",
  }
);

export default Platform;
