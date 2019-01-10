require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./ctrl');
const auth = require('./auth_ctrl');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use( express.static( `${__dirname}/../build` ) );

let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, STRIPE_KEY } = process.env

const stripe = require('stripe')(STRIPE_KEY)

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

//component endpoints

//Products.js
app.get('/api/getProducts', ctrl.getProducts);
app.post('/api/postProducts/:id', ctrl.postToCart);

//Cart.js
app.get('/api/getCart/', ctrl.getCart);
app.delete('/api/deleteItem/:cart_id', ctrl.delete);
app.put('/api/updateQuantity', ctrl.updateQuantity);

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
      res.status(500).end();
    }
  });

app.listen(SERVER_PORT, () => {
    console.log(`I hear it on: ${SERVER_PORT}`)
});

//This tells express to look for a build folder.
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});