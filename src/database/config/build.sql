BEGIN;
DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    password VARCHAR (200) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    vote INT,
    text TEXT NOT NULL,
    user_id INT REFERENCES users(id)
);


COMMIT;
