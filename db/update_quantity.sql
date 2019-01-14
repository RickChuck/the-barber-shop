UPDATE cart
SET quantity = $1
WHERE cart_id = $2;

SELECT *
FROM cart
WHERE cart_id = $2;