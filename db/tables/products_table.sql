CREATE TABLE products(
    product_id SERIAL PRIMARY KEY NOT NULL,
    product_name VARCHAR,
    product_price DECIMAL NOT NULL,
    product_description VARCHAR,
    img VARCHAR,
);

INSERT INTO products(product_name, product_price, product_description, img)
VALUES('Layrite Grooming Spray', 15.98, 'Often reserved for professionals, stolen by girlfriends and borrowed by wives, this all-in-one water-soluble spray is perfect for prepping dry or damp hair whenever volume, texture and a little extra hold is desired. It’s also great for the guy who doesn’t like to put a lot of stuff in his hair but still likes to look a little groomed.', 'https://cdn.shopify.com/s/files/1/0023/2154/7317/products/layrite-gromming-spray-jars-1_1600x_03c0031f-18f5-4a76-b07c-4c01a3edc7ad_800x.png?v=1536604682');

INSERT INTO products(product_name, product_price, product_description, img)
VALUES('Layrite Original Pomade', 8.50, 'A versatile water-based pomade that holds all day yet rinses out easily with water.', 'https://cdn.shopify.com/s/files/1/0023/2154/7317/products/Layrite_Product--009_800x.png?v=1535739076');

INSERT INTO products(product_name, product_price, product_description, img)
VALUES('Layrite Natural Matte Cream', 9.00, 'A lightweight, water-based shaping cream that adds texture and creates flexible hold for a range of styles. Flexible, medium hold keeps your style in place all day while leaving hair feeling soft and natural-not stiff or waxy.', 'https://cdn.shopify.com/s/files/1/0023/2154/7317/products/Layrite_Product--018-2_800x.png?v=1535739073');

INSERT INTO products(product_name, product_price, product_description, img)
VALUES('Layrite Cement Clay', 19.00, 'Strong hold with a great matte finish. An extreme high hold, water-based styling clay that delivers a clean matte finish that lasts all day. Washes out easily with water. All day incredible high hold without weighing hair down. Thickens & texturizes. Clean matte finish. Doesn’t dry, never flakes. ', 'https://cdn.shopify.com/s/files/1/0023/2154/7317/products/Layrite_Product--020_800x.png?v=1535739070');

INSERT INTO products(product_name, product_price, product_description, img)
VALUES('Concentrated Beard Oil', 20.00, 'A revolutionary, thicker, less greasy, and easy to use beard and skin conditioner expertly formulated to deliver superb moisture to hair and skin.', 'https://cdn.shopify.com/s/files/1/0023/2154/7317/products/beard_oil_lg_bkg_800x.png?v=1536968013');

INSERT INTO products(product_name, product_price, product_description, img)
VALUES('No.9 Bay Rum Aftershave', 12.00, 'A barbershop classic that soothes & refreshes A vintage barbershop favorite that cools, invigorates and soothes the skin after shaving.', 'https://cdn.shopify.com/s/files/1/0023/2154/7317/products/Aftershave_800x.png?v=1535739089');

INSERT INTO products(product_name, product_price, product_description, img)
VALUES('Daily Shampoo', 18.00, 'Energizing shampoo that leaves your hair clean, healthy, soft and ready to style.', 'https://cdn.shopify.com/s/files/1/0023/2154/7317/products/Layrite-Shampoo-016_800x.png?v=1535739066');

INSERT INTO products(product_name, product_price, product_description, img)
VALUES('Moisturizing Conditioner', 18.00, 'Vitamin packed formula strengthens and moisturizes for healthy hair and scalp without weighing down your style. Works best for all lengths and textures of hair and those with dry scalp.', 'https://cdn.shopify.com/s/files/1/0023/2154/7317/products/Layrite-Conditioner-019_800x.png?v=1535739088');