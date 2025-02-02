import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database-client.js";

class GameLibrary extends Model {}

GameLibrary.init(
  {
    game_id: {
      type: DataTypes.INTEGER, // Utilisation de DataTypes au lieu de Sequelize
      references: {
        model: "games", // Assurez-vous que le nom de la table est correct
        key: "id",
      },
      allowNull: false, // Ajout d'une contrainte pour la clé étrangère
    },

    user_id: {
      type: DataTypes.INTEGER, // Utilisation de DataTypes au lieu de Sequelize
      references: {
        model: "users", // Assurez-vous que le nom de la table est correct
        key: "id",
      },
      allowNull: false, // Ajout d'une contrainte pour la clé étrangère
    },
  },
  {
    sequelize,
    tableName: "game_library",
  }
);

export default GameLibrary;
