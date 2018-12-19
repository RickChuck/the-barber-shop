CREATE TABLE appointments (
	app_id serial PRIMARY KEY NOT NULL,
	service_type TEXT NOT NULL,
	service_provider TEXT NOT NULL,
	app_date DATE NOT NULL,
	app_time TIME NOT NULL,
	price TEXT NOT NULL,
	avg_time TEXT,
	user_id integer FOREIGN KEY TO users,
);