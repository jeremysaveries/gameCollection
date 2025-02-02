import Comment from "./Comment.js";
import Game from "./Game.js";
import GameGenre from "./GameGenre.js";
import GameLibrary from "./GameLibrary.js";
import GamePlatform from "./GamePlatform.js";
import Genre from "./Genre.js";
import Library from "./Library.js";
import LibraryUser from "./LibraryUser.js";
import Plateform from "./Plateform.js";
import User from "./User.js";

Game.belongsToMany(Genre, {
  through: "GameGenre", // Nom de la table de liaison
  foreignKey: "game_id", // Clé étrangère pointant vers Game
  otherKey: "genre_id", // Clé étrangère pointant vers Genre
  as: "genres", // Alias pour récupérer les genres d'un jeu
});

Genre.belongsToMany(Game, {
  through: "GameGenre",
  foreignKey: "genre_id",
  otherKey: "game_id",
  as: "games", // Alias pour récupérer les jeux d'un genre
});

Game.belongsToMany(Plateform, {
  through: "GamePlatform",
  foreignKey: "game_id",
  otherKey: "platform_id",
  as: "platforms",
});

Plateform.belongsToMany(Game, {
  through: "GamePlatform",
  foreignKey: "platform_id",
  otherKey: "game_id",
});

Game.belongsToMany(Library, {
  through: GameLibrary, // Nom du modèle de liaison
  foreignKey: "game_id",
  otherKey: "library_id",
  as: "libraries",
});

Library.belongsToMany(Game, {
  through: GameLibrary,
  foreignKey: "library_id",
  otherKey: "game_id",
  as: "games",
});
Game.belongsToMany(Library, {
  through: "GameLibrary",
  foreignKey: "game_id",
  otherKey: "library_id",
  as: "libraries",
});

Library.belongsToMany(Game, {
  through: "GameLibrary",
  foreignKey: "library_id",
  otherKey: "game_id",
  as: "games",
});

Game.hasMany(Comment, { foreignKey: "game_id", as: "commentaires" });
Comment.belongsTo(Game, { foreignKey: "game_id", as: "game" });

User.hasMany(Comment, { foreignKey: "user_id", as: "commentaires" });
Comment.belongsTo(User, { foreignKey: "user_id", as: "user" });

export {
  Comment,
  Game,
  GameGenre,
  GameLibrary,
  GamePlatform,
  Library,
  LibraryUser,
  Plateform,
  User,
};
