INSERT INTO cart(
  product_id, user_id  
)
VALUES($1, $2)
RETURNING *;