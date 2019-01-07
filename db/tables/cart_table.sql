CREATE TABLE cart(
    cart_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    product_id INT REFERENCES products(product_id),
    quantity INT
)