CREATE TABLE products(
    product_id SERIAL PRIMARY KEY NOT NULL,
    product_name VARCHAR,
    product_price DECIMAL NOT NULL,
    product_description VARCHAR,
    img VARCHAR,
);

INSERT INTO products(product_name, product_price, product_description, img, user_id)
VALUES('Layrite Grooming Spray', 15.98, 'Often reserved for professionals, stolen by girlfriends and borrowed by wives, this all-in-one water-soluble spray is perfect for prepping dry or damp hair whenever volume, texture and a little extra hold is desired. It’s also great for the guy who doesn’t like to put a lot of stuff in his hair but still likes to look a little groomed.', 'https://cdn.shopify.com/s/files/1/0023/2154/7317/products/layrite-gromming-spray-jars-1_1600x_03c0031f-18f5-4a76-b07c-4c01a3edc7ad_800x.png?v=1536604682');