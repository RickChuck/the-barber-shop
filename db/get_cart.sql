select *
from cart
join users on cart.user_id = users.id
join products on cart.product_id = products.product_id
where cart.user_id = $1;