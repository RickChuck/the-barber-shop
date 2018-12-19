require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./ctrl');
const auth = require('./auth_ctrl');

const app = express();
app.use(express.json());

let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

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
app.post('/auth/signup', auth.signup)
app.post('/auth/login', auth.login)
app.post('/auth/logout', auth.logout)
//component endpoints
app.get('/api/getProducts', ctrl.getProducts)
app.post('/api/postProducts/:id', ctrl.postToCart)

app.listen(SERVER_PORT, () => {
    console.log(`I hear it on: ${SERVER_PORT}`)
});