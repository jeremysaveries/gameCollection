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
    image_profile INTEGER,
    image_banner INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des jeux
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    release_date DATE,
    status VARCHAR(255) NOT NULL,
    image INTEGER,  -- Tu pourrais envisager de faire une référence à la table images ici
    developer VARCHAR(255) NOT NULL,
    editor VARCHAR(255) NOT NULL
);

-- Table des genres
CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);

-- Table de liaison entre les jeux et genres
CREATE TABLE gameGenres (
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
CREATE TABLE gamePlatforms (
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
CREATE TABLE gameLibrary (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL REFERENCES games(id),
    user_id INTEGER NOT NULL REFERENCES users(id)
);

-- Table de liaison entre l'utilisateur et la bibliothèque
CREATE TABLE libraryUser (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    library_id INTEGER NOT NULL REFERENCES library(id)
);

-- Table des commentaires
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    game_id INTEGER NOT NULL REFERENCES games(id),
    content TEXT NOT NULL,
    image_id INTEGER,  -- Si tu fais référence à la table images
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des images
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    alt VARCHAR(255) NOT NULL,
    user_id INTEGER,   -- Référence à la table users pour l'image de profil
    comment_id INTEGER -- Référence à la table comments pour les images de commentaires
);

COMMIT;
