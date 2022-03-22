'use strict';

/**
 * user-goal service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-goal.user-goal');
