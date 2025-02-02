BEGIN;

-- Table des utilisateurs
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    pseudo VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    birthdate DATE,
    profilePicture TEXT,
    profileBanner TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des jeux
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    releaseDate DATE,
    status VARCHAR(50) NOT NULL,
    picture TEXT,  -- Tu pourrais envisager de faire une référence à la table images ici
    developer VARCHAR(255) NOT NULL,
    editor VARCHAR(255) NOT NULL
);

-- Table des genres
CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);

-- Table de liaison entre les jeux et genres
CREATE TABLE game_Genres (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL REFERENCES games(id), 
    genre_id INTEGER NOT NULL REFERENCES genres(id)
);

-- Table des plateformes
CREATE TABLE platforms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Table de liaison entre les jeux et plateformes
CREATE TABLE game_platforms (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL REFERENCES games(id),
    platform_id INTEGER NOT NULL REFERENCES platforms(id)
);

-- Table de bibliothèque de jeux (pour l'utilisateur)
CREATE TABLE library (
    id SERIAL PRIMARY KEY,
    added_game VARCHAR
);

-- Table de liaison entre les jeux et la bibliothèque
CREATE TABLE game_library (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL REFERENCES games(id),
    user_id INTEGER NOT NULL REFERENCES users(id)
);

-- Table de liaison entre l'utilisateur et la bibliothèque
CREATE TABLE library_users (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    library_id INTEGER NOT NULL REFERENCES library(id)
);

-- Table des commentaires
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    picture TEXT, 
    user_id INTEGER NOT NULL REFERENCES users(id),
    game_id INTEGER NOT NULL REFERENCES games(id),
    content VARCHAR (500),-- Si tu fais référence à la table images
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



COMMIT;
