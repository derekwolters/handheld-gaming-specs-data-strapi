'use strict';

/**
 *  handheld controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::handheld.handheld');
