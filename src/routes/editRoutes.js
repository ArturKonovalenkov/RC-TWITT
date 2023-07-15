require("@babel/register");
const express = require("express");
const editRouter = express.Router();
const { checkUser } = require("../lib/middlewares/common");
const { Post, Friend } = require("../../db/models");

const render = require("../lib/render");
const Edit = require("../../views/edit/Edit");

editRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const { user } = req.session;
    const friends = await Friend.findAll({
      raw: true,
    });
    const post = await Post.findByPk(id, { raw: true });
    render(Edit, { user, post, friends }, res);
    res.end();
  } catch (error) {
    console.log("error", error);
  }
});

editRouter.post("/", async (req, res) => {
  try {
    const { id, body, userId } = req.body;
    // console.log(req.body);
    await Post.update({ body }, { where: { id } });
    res.redirect("/kabinet");
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = editRouter;
