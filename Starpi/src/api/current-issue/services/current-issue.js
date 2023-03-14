'use strict';

/**
 * current-issue service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::current-issue.current-issue');
