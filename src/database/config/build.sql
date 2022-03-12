BEGIN;
DROP TABLE IF EXISTS users, users_posts, posts CASCAD;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    password VARCHAR (200) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    vote INT,
    text TEXT NOT NULL
);

CREATE TABLE users_posts (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id),
    posts_id INT REFERENCES posts(id) 
);


COMMIT;
