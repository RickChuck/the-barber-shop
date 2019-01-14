require('dotenv').config();

const {SERVER_PORT} = process.env

const FRONTEND_DEV_URLS = [ SERVER_PORT ];

const FRONTEND_PROD_URLS = [
  'https://www.abarbershop.pro',
  'https://abarbershop.pro'
];

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS;