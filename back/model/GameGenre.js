import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database-client.js";

class GameGenre extends Model {}

GameGenre.init(
  {
    game_id: {
      type: DataTypes.INTEGER, // Utilisation de DataTypes au lieu de Sequelize
      references: {
        model: "games", // Assurez-vous que le nom de la table est correct
        key: "id",
      },
      allowNull: false, // Ajout d'une contrainte pour la clé étrangère
    },

    genre_id: {
      type: DataTypes.INTEGER, // Utilisation de DataTypes au lieu de Sequelize
      references: {
        model: "genres", // Assurez-vous que le nom de la table est correct
        key: "id",
      },
      allowNull: false, // Ajout d'une contrainte pour la clé étrangère
    },
  },
  {
    sequelize,
    tableName: "game_genres",
  }
);

export default GameGenre;
