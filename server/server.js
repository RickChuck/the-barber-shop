require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./ctrl');
const auth = require('./auth_ctrl');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const stripe = require('react-stripe-checkout');

// const SERVER_CONFIGS = require('./constants/srvr')

// const configureServer = require('./stripeServer');
// const configureRoutes = require('./stripeRoutes');
// configureServer(app);
// configureRoutes(app);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use( express.static( `${__dirname}/../build` ) );

let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, STRIPE_KEY } = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
});

//auth endpoints
app.post('/auth/signup', auth.signup);
app.post('/auth/login', auth.login);
app.post('/auth/logout', auth.logout);

//Component endpoints

//Booking.js
app.post('/api/bookings',ctrl.createBooking);
app.get('/api/getBookings', ctrl.getBooking);
app.delete('/api/bookings/:id', ctrl.deleteBooking);

//Products.js
app.get('/api/getProducts', ctrl.getProducts);
app.post('/api/postProducts/:id', ctrl.postToCart);

//Cart.js
app.get('/api/getCart', ctrl.getCart);
app.delete('/api/deleteItem/:cart_id', ctrl.delete);
app.put('/api/updateQuantity/:cart_id', ctrl.updateQuantity);

// Stripe -- Checkout.js
app.post("/charge", async (req, res) => {
    try {
        let {status} = await stripe.charges.create({
            amount: 2000,
            currency: "usd",
            description: "An example charge",
            source: req.body
        });
  console.log(req.body)
      res.json({status});
    } catch (err) {
        console.log(err, "Payment error please try again");
        res.status(500).end();
    }
  });
app.listen(SERVER_PORT, () => {
    console.log(`I hear it on: ${SERVER_PORT}`)
})