const request = require('request');

const {YC_LOGIN, YC_PASS} = process.env; // eslint-disable-line no-process-env

module.exports = () => new Promise((resolve, reject) =>
    request(
        {
            method: 'POST',
            url: 'https://private-anon-1362b32a6e-yclients.apiary-mock.com/api/v1/auth',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer access_token, User user_token'
                // 'Authorization': 'Bearer access_token'
            },
            body: '{  "login": "' + YC_LOGIN + '",  "password": "' + YC_PASS + '"}'
        },
        (error, response, body) => {
            if (error) {
                reject(error);
                return;
            }

            // console.log('Status:', response.statusCode);
            // console.log('Headers:', JSON.stringify(response.headers));
            // console.log('Response:', body);
            // console.log('Response:', JSON.parse(body).user_token);

            console.log(body);

            resolve(JSON.parse(body));
        }
    )
);
