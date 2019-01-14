UPDATE cart
SET quantity = $1
WHERE cart_id = $2;

select *
from cart
join users on cart.user_id = users.id
join products on cart.product_id = products.product_id
where cart.user_id = $3;