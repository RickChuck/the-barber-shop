CREATE TABLE cart(
    cart_id SERIAL PRIMARY KEY,
    user_id FOREIGN KEY TO users,
    product_id FOREIGN KEY TO products,
    quantity INT
)