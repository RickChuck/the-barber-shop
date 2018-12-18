INSERT INTO users
(
    username, hash_value
)
VALUES($1, $2)
RETURNING * ;