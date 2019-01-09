INSERT INTO cart(
  product_id, user_id, quantity  
)
VALUES($1, $2, $3);

SELECT *
FROM cart
join users on cart.user_id = users.id
join products on cart.product_id = products.product_id
WHERE cart.user_id = $2;