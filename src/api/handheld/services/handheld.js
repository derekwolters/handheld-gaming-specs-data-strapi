'use strict';

/**
 * handheld service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::handheld.handheld');
