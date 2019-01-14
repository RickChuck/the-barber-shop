SELECT * 
FROM appointments
join users on appointments.user_id = users.id
WHERE appointments.user_id = $1