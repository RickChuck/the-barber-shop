CREATE TABLE appointments (
	app_id serial PRIMARY KEY NOT NULL,
	client_name TEXT NOT NULL,
	service_type TEXT NOT NULL,
	service_provider TEXT NOT NULL,
	app_date DATE,
	app_time TIME,
	user_id integer REFERENCES users(id)
);

INSERT INTO appointments(client_name, service_type, service_provider, app_date, app_time, user_id)
VALUES('John Doe', 'Chairman $35', 'Kaylea', 2019-01-13, 9:30, 1)