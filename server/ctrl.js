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
        await res.status(200).send(cart)
        console.log(req.session.user);
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

    updateQuantity: async (req, res) => {
        const db = req.app.get('db');
        const {quantity} = req.body
        const {cart_id} = req.params
        const {id} = req.session.user
        const updatedQuantity = await db.update_quantity([quantity, cart_id, id])
        res.status(200).send(updatedQuantity)
        console.log(req.body, req.params)
    },

    createBooking: (req, res) => {
        console.log(req.body)
        const db = req.app.get('db')
        const {client_name, service_type, service_provider, app_date, app_time} = req.body
        console.log(req.session);
        db.create_booking([client_name, service_type, service_provider, app_date, app_time, req.session.user.id])
        .then(bookings => res.send(bookings))
    },

    getBooking: async (req, res) => {     
        try {        
            const db = req.app.get('db');
            console.log(req.session.user);
            const user_id = await req.session.user.id
            let bookings = await db.get_booking([user_id]);
            await res.status(200).send(bookings)
            // console.log(req.session.user);
        } catch (err) { console.log(err);} 
    },

    deleteBooking: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
        const deleteBooking = await db.delete_booking([id, req.session.user.id])
        await res.status(200).send(deleteBooking)
    }
};