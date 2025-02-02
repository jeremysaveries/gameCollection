import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database-client.js";

// 1. Je créer ma class qui extends de Model
class User extends Model {}

// 2. Je dois initialiser mon modèle
User.init(
  // 2.1 Je dois définir les attributs de mon modèle
  {
    email: {
      type: DataTypes.VARCHAR(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    pseudo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },

    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    profilePicture: {
      type: DataTypes.TEXT,
    },
    profileBanner: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING(255),
    },
    lastname: {
      type: DataTypes.STRING(255),
    },
  },
  // 2.2 Je dois passé des informations supplémentaires sur mon entité
  {
    sequelize,
    tableName: "users",
  }
);

export default User;
