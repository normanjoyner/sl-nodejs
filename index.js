'use strict';

const services = require('./services');

const request = require('request');

const SL_API_URL = 'https://api.softlayer.com/rest/v3/';
const SL_SERVICE_PREFIX = 'SoftLayer_';

class SoftLayerClient {
    constructor(username, apiKey) {
        this.credentials = {
            username,
            apiKey,
        };
        this.credentials.basicAuth = `Basic ${new Buffer(`${this.credentials.username}:${this.credentials.apiKey}`).toString('base64')}`;

        this.baseUrl = SL_API_URL;
        this.servicePrefix = SL_SERVICE_PREFIX;

        services.register(this);
    }
}

module.exports = SoftLayerClient;
