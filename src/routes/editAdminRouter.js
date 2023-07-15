require("@babel/register");
const express = require("express");
const editAdminRouter = express.Router();
const { Post, Friend } = require("../../db/models");

const render = require("../lib/render");
const EditAdmin = require("../../views/edit/EditAdmin");

editAdminRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.session;
    const post = await Post.findByPk(id, { raw: true });
    const friends = await Friend.findAll({
      raw: true,
    });
    render(EditAdmin, { user, post, friends }, res);
    res.end();
  } catch (error) {
    console.log("error", error);
  }
});

editAdminRouter.post("/", async (req, res) => {
  try {
    const { id, body } = req.body;
    await Post.update({ body }, { where: { id } });
    res.redirect("/lenta");
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = editAdminRouter;
