import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database-client.js";

class Comment extends Model {}

Comment.init(
  {
    contentText: {
      type: DataTypes.STRING(500),
    },

    picture: {
      type: DataTypes.Text,
    },
  },
  {
    // Je passe la connexion à ma base de données
    sequelize,
    tableName: "comments",
  }
);

export default Comment;
