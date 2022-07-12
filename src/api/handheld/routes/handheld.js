'use strict';

/**
 * handheld router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::handheld.handheld');
