require('dotenv').config();

const {SERVER_PORT} = process.env

const SERVER_CONFIGS = {
    PRODUCTION: process.env.NODE_ENV === 'production',
    PORT: process.env.PORT || SERVER_PORT,
  };
  
  module.exports = SERVER_CONFIGS;