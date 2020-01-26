'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.model.User.create({name: "test", age: 26});
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
