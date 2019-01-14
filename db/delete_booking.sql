DELETE FROM appointments
WHERE app_id = $1;

SELECT * FROM appointments
WHERE user_id= $2;