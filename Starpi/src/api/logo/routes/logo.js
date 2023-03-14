"use strict";

/**
 * logo router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::logo.logo");

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/logos",
      handler: "logo.findMany",
      config: {
        plocies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/logos/{:slug}",
      handler: "logo.findOne",
      config: {
        plocies: [],
        middlewares: [],
      },
    },
  ],
};
