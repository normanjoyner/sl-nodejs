'use strict';

const request = require('request');

const SERVICE = 'Product_Order';

module.exports = {
    register: function(slClient) {
        return {
            'Product_Order': {
                verifyOrder: function(orderTemplate, callback) {
                    return request({
                        method: 'POST',
                        baseUrl: slClient.baseUrl,
                        url: `${slClient.servicePrefix}${SERVICE}/verifyOrder`,
                        headers: {
                            authorization: slClient.credentials.basicAuth,
                            'content-type': 'application/json',
                            accept: 'application/json'
                        },
                        body: JSON.stringify({
                            parameters: [
                                orderTemplate
                            ]
                        })
                    }, callback);
                }
            }
        }
    }
};
