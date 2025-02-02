import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database-client.js";

class GamePlatform extends Model {}

GamePlatform.init(
  {
    game_id: {
      type: DataTypes.INTEGER, // Utilisation de DataTypes au lieu de Sequelize
      references: {
        model: "games", // Assurez-vous que le nom de la table est correct
        key: "id",
      },
      allowNull: false, // Ajout d'une contrainte pour la clé étrangère
    },

    platform_id: {
      type: DataTypes.INTEGER, // Utilisation de DataTypes au lieu de Sequelize
      references: {
        model: "platforms", // Assurez-vous que le nom de la table est correct
        key: "id",
      },
      allowNull: false, // Ajout d'une contrainte pour la clé étrangère
    },
  },
  {
    sequelize,
    tableName: "game_platforms",
  }
);

export default GamePlatform;
