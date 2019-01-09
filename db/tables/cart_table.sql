CREATE TABLE cart(
    cart_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    product_id INT REFERENCES products(product_id),
    quantity INT
)

INSERT INTO cart(user_id, product_id, quantity)
VALUES(1, 3, 1);

select *
from cart
join users on cart.user_id = users.id
join products on cart.product_id = products.product_id
where cart.user_id = 1;