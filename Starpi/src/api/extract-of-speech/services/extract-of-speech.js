'use strict';

/**
 * extract-of-speech service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::extract-of-speech.extract-of-speech');
