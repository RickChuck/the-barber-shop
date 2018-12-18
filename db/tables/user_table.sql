CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(200),
    hash_value TEXT 
);