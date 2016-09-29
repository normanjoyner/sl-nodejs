'use strict';

const request = require('request');

const SERVICE = 'Virtual_Guest';

module.exports = {
    register: function(slClient) {
        return {
            'Virtual_Guest': {
                getCreateObjectOptions: function(callback) {
                    return request({
                        method: 'GET',
                        baseUrl: slClient.baseUrl,
                        //url: `${slClient.servicePrefix}Location_Datacenter/getDatacenters`,
                        url: `${slClient.servicePrefix}${SERVICE}/getCreateObjectOptions?objectMask=mask(SoftLayer_Container_Virtual_Guest_Configuration).datacenters`,
                        headers: {
                            authorization: slClient.credentials.basicAuth,
                            'content-type': 'application/json',
                            accept: 'application/json'
                        }
                    }, callback);
                },

                generateOrderTemplate: function(callback) {
                    return request({
                        method: 'POST',
                        baseUrl: slClient.baseUrl,
                        url: `${slClient.servicePrefix}${SERVICE}/generateOrderTemplate`,
                        headers: {
                            authorization: slClient.credentials.basicAuth,
                            'content-type': 'application/json',
                            accept: 'application/json'
                        },
                        body: JSON.stringify({
                            parameters: [
                                {
                                    "hostname": "host1",
                                    "startCpus": 32,
                                    "maxMemory": 2048,
                                    "domain": "example.com",
                                    "datacenter": {
                                        name: "tok02"
                                    },
                                    "hourlyBillingFlag": true,
                                    "localDiskFlag": true,
                                    "operatingSystemReferenceCode": "UBUNTU_LATEST"
                                }
                            ]
                        })
                    }, callback);
                }
            }
        }
    }
};
