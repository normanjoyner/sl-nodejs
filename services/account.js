'use strict';

const request = require('request');

const SERVICE = 'Account';

module.exports = {
    register: function(slClient) {
        return {
            Account: {
                getCurrentUser: function(callback) {
                    return request({
                        method: 'GET',
                        baseUrl: slClient.baseUrl,
                        url: `${slClient.servicePrefix}${SERVICE}/CurrentUser`,
                        headers: {
                            authorization: slClient.credentials.basicAuth,
                            'content-type': 'application/json',
                            accept: 'application/json'
                        }
                    }, callback);
                },

                getObject: function(callback) {
                    return request({
                        method: 'GET',
                        baseUrl: slClient.baseUrl,
                        url: `${slClient.servicePrefix}${SERVICE}/getObject?objectMask=mask[address1]`,
                        headers: {
                            authorization: slClient.credentials.basicAuth,
                            'content-type': 'application/json',
                            accept: 'application/json'
                        }
                    }, callback);
                }
            }
        }
    }
};
