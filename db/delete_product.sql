DELETE FROM cart
WHERE cart_id = $1;

SELECT * FROM cart
JOIN users on cart.user_id = users.id 
JOIN products on cart.product_id = products.product_id
WHERE cart.user_id = $2;