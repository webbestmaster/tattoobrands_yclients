const request = require('request');

const {YC_LOGIN, YC_PASS} = process.env; // eslint-disable-line no-process-env

module.exports.getProductBy = (key, value, userToken) => {
    request({
        method: 'GET',
        url: 'https://private-anon-1362b32a6e-yclients.apiary-mock.com/api/v1/goods/36079?term=TR-004',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer access_token, User ' + userToken
        }
    }, (error, response, body) => {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    });
};
