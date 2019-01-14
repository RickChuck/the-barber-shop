INSERT INTO appointments
(client_name, service_type, service_provider, app_date, app_time, user_id)
VALUES($1, $2, $3, $4, $5, $6)
RETURNING *;