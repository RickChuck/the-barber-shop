CREATE TABLE users (
	id serial PRIMARY KEY NOT NULL,
	username varchar(200) NOT NULL,
	hash_value TEXT NOT NULL
);