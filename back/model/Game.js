import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database-client.js";

class Game extends Model {}

Game.init(
  {
    title: {
      type: DataTypes.STRING(255), // Utilisation de STRING au lieu de VARCHAR
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING(50), // Utilisation de STRING pour des chaînes plus courtes
      allowNull: false,
    },

    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    developer: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    editor: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    picture: {
      type: DataTypes.TEXT, // Cela fonctionne si tu stockes une URL ou un chemin d'image
    },
  },
  {
    sequelize,
    tableName: "games",
  }
);

export default Game;
