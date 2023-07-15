require("@babel/register");
const express = require("express");
const friendsRouter = express.Router();

const { Friend, User } = require("../../db/models");

const render = require("../lib/render");
const Friends = require("../../views/Routs-Views/Friends");

friendsRouter.get("/", async (req, res) => {
  try {
    const friends = await Friend.findAll({
      raw: true,
    });
    const users = await User.findAll({
      raw: true,
    });
    const { user } = req.session;
    render(Friends, { user, friends, users }, res);
  } catch (error) {
    console.log("error", error);
    res.end;
  }
});

friendsRouter.delete("/delete/:id", async (req, res) => {
  console.log("=>", req.params);
  try {
    const { id } = req.params;
    await Friend.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = friendsRouter;
