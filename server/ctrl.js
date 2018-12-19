module.exports = {
    getProducts: async (req, res) => {
        const db = req.app.get('db');
        let products = await db.get_products()
        res.status(200).send(products)
        console.log(products)
    },
    postToCart: (req, res) => {
        const db = req.app.get('db');
        const {product_name, product_price, product_description, img} = req.body
        const {id} = req.params
        db.add_cart([id, product_name, product_price, product_description, img, req.session.user_id])
        .then(products => res.send(products))
    }
}