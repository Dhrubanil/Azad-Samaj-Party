"use strict";

/**
 * logo controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { sanitize } = require("@strapi/utils");

module.exports = createCoreController("api::logo.logo", ({ strapi }) => ({

  findMany : async(ctx) => {
    try{
      const entity = await strapi.db
        .query("api::logo.logo")
        .findMany( {
          populate: ['Logo'],
        });
      
      // const sanitizedEntity = await sanitize.contentAPI.output(entity);

      // return { data: sanitizedEntity };
      ctx.body = entity;
    }catch(e){
      ctx.body = "error"
    }
  },

  findOne : async(ctx) => {
    try {
      console.log("res",ctx.query);
      const entity = await strapi.db.query("api::logo.logo").findOne({
        where: {
          Title: "Asp2",
        },
      });

      const sanitizedEntity = await sanitize.contentAPI.output(entity);

      return { data: sanitizedEntity };
      // const res = await strapi.entityService.findOne("api::logo.logo",ctx.params._id);
      ctx.body = res;
    } catch (e) {
      console.log("eeeee",e);
      ctx.body = "error";
    }
  }

}));
