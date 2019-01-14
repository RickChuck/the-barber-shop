const configureStripe = require('stripe');
require('dotenv').config();

const {STRIPE_KEY} = process.env

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? STRIPE_KEY
    : STRIPE_KEY;

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;