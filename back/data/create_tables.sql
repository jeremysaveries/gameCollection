

BEGIN;



CREATE TABLE users (
    id SERIAL PRIMARY KEY,          -- Identifiant unique pour chaque utilisateur
    username VARCHAR(255) UNIQUE NOT NULL,  -- Nom d'utilisateur unique
    email VARCHAR(255) UNIQUE NOT NULL,     -- Adresse email unique
    password VARCHAR(255) NOT NULL,         -- Mot de passe de l'utilisateur
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Date de création du compte
);
CREATE TABLE games (
    id SERIAL PRIMARY KEY,          -- Identifiant unique pour chaque jeu
    title VARCHAR(255) NOT NULL,   -- Titre du jeu
    description TEXT,              -- Description du jeu
    release_date DATE,             -- Date de sortie du jeu
    genre VARCHAR(255)             -- Genre du jeu
);
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,              -- Identifiant unique pour chaque commentaire
    user_id INTEGER NOT NULL,          -- Clé étrangère vers la table `users`
    game_id INTEGER NOT NULL,          -- Clé étrangère vers la table `games`
    content TEXT NOT NULL,            -- Contenu du commentaire
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date de création du commentaire
    parent_comment_id INTEGER,        -- Clé étrangère optionnelle pour les réponses
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, -- Clé étrangère avec contrainte de suppression en cascade
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE, -- Clé étrangère avec contrainte de suppression en cascade
    FOREIGN KEY (parent_comment_id) REFERENCES comments(id) ON DELETE SET NULL -- Clé étrangère avec contrainte de suppression qui met à NULL
);
