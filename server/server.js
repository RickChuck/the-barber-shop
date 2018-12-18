require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
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
app.post('/auth/register', auth.register)
app.post('/auth/login', auth.login)
app.post('/auth/logout', auth.logout)

app.listen(SERVER_PORT, () => {
    console.log(`I hear it on: ${SERVER_PORT}`)
});