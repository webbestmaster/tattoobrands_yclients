/* global process */
require('dotenv').config();

const login = require('./api/login');
const {getProductBy} = require('./api/product');

login().then(data => {
    getProductBy(null, null, data.user_token);
});


