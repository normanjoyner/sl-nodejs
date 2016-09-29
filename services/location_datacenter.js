'use strict';

const request = require('request');

const SERVICE = 'Location_Datacenter';

module.exports = {
    register: function(slClient) {
        return {
            'Location_Datacenter': {
                getDatacenterWithVSIResourceRecord: function(callback) {
                    return request({
                        method: 'GET',
                        baseUrl: slClient.baseUrl,
                        url: `${slClient.servicePrefix}${SERVICE}/getDatacentersWithVirtualImageStoreServiceResourceRecord`,
                        headers: {
                            authorization: slClient.credentials.basicAuth,
                            'content-type': 'application/json',
                            accept: 'application/json'
                        }
                    }, callback);
                },
                getRegions: function(callback) {
                    return request({
                        method: 'GET',
                        baseUrl: slClient.baseUrl,
                        url: `${slClient.servicePrefix}${SERVICE}/getRegions`,
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
