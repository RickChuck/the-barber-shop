module.exports = {
    getProducts: async (req, res) => {
        const db = req.app.get('db');
        let products = await db.get_products();
        res.status(200).send(products);
        // console.log(products);
    },

    getCart: async (req, res) => {
        const db =req.app.get('db');
        const user_id = req.session.user.id
        let cart = await db.get_cart([user_id]);
        res.status(200).send(cart)
        // console.log(cart);
    },

    postToCart: (req, res) => {
        const db = req.app.get('db');
        const {quantity} = req.body
        const {id} = req.params
        const user_id = req.session.user.id
        // console.log('request', req.params, req.body)
        db.add_cart([id, user_id, quantity])
        .then(products => {
            // console.log(products)
            res.send(products)}).catch((err) => {
                console.log(err)
                res.sendStatus(500)
            })
    },

    delete: (req, res) => {
        const db = req.app.get('db');
        const {cart_id} = req.params
        console.log(req.session.user.id)
        db.delete_product([cart_id, req.session.user.id])
        .then(remove => res.status(200).send(remove))
    },

    updateQuantity: (req, res) => {
        const db = req.app.get('db');
        const {quantity} = req.body
        const {cart_id} = req.params
        db.update_quantity([quantity, cart_id])
        .then((updatedQuantity) => {
            res.status(200).send(updatedQuantity)
        })
    }
};