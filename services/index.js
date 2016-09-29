'use strict';

const _ = require('lodash');
const fs = require('fs');

module.exports.register = function(slClient) {
    _.chain(fs.readdirSync(__dirname))
        .filter((file) => file !== 'index.js')
        .map((file) => require(`./${file}`).register(slClient))
        .value()
        .forEach((service) => {
            _.forEach(service, (method, key) => {
                slClient[key] = method;
            });
        });
}
