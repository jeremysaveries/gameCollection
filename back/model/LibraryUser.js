import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database-client.js";
import { linear } from "svelte/easing";

class LibraryUser extends Model {}

LibraryUser.init(
  {
    user_id: {
      type: DataTypes.INTEGER, // Utilisation de DataTypes au lieu de Sequelize
      references: {
        model: "users", // Assurez-vous que le nom de la table est correct
        key: "id",
      },
      allowNull: false, // Ajout d'une contrainte pour la clé étrangère
    },

    game_id: {
      type: DataTypes.INTEGER, // Utilisation de DataTypes au lieu de Sequelize
      references: {
        model: "games", // Assurez-vous que le nom de la table est correct
        key: "id",
      },
      allowNull: false, // Ajout d'une contrainte pour la clé étrangère
    },
  },
  {
    sequelize,
    tableName: "library_users",
  }
);

export default LibraryUser;
