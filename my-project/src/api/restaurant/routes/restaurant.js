'use strict';

/**
 * restaurant router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::restaurant.restaurant',
{
    config: {
      find: {
        auth: false
      }
    }
});
