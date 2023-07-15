require("@babel/register");
const express = require("express");
const apiRouter = express.Router();

const { Friend } = require("../../db/models");

const render = require("../lib/render");
const Api = require("../../views/Routs-Views/Api");

apiRouter.get("/", async (req, res) => {
  const { user } = req.session;
  const friends = await Friend.findAll({
    raw: true,
  });
  render(Api, { user, friends }, res);
  res.end();
});
module.exports = apiRouter;
