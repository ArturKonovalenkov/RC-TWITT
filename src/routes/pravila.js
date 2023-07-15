require("@babel/register");
const express = require("express");
const pravilaRouter = express.Router();

const { Friend } = require("../../db/models");

const render = require("../lib/render");
const Pravila = require("../../views/Routs-Views/Pravila");

pravilaRouter.get("/", async (req, res) => {
  try {
    const friends = await Friend.findAll({
      raw: true,
    });
    const { user } = req.session;
    render(Pravila, { user, friends }, res);
  } catch (error) {
    console.log("error", error);
    res.end;
  }
});

module.exports = pravilaRouter;
