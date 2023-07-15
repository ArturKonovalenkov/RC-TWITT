require("@babel/register");
const express = require("express");
const kabinetRouter = express.Router();
const { checkUser } = require("../lib/middlewares/common");
const { Post, User, Friend } = require("../../db/models");

const render = require("../lib/render");
const Kabinet = require("../../views/Routs-Views/Kabinet");

kabinetRouter.post("/", async (req, res) => {
  try {
    const { userId, body } = req.body;

    console.log(req.body);
    const newPost = await Post.create(
      {
        userId,
        body,
      },
      { plain: true }
    );

    // res.json({ newPost });
    res.redirect("/kabinet");
  } catch (error) {
    console.log("error", error);
  }
});

kabinetRouter.get("/", async (req, res) => {
  try {
    const { id } = req.session.user;
    const friends = await Friend.findAll({
      raw: true,
    });
    const users = await User.findAll({
      raw: true,
    });
    const post = await Post.findAll({
      where: { userId: id },
      order: [["createdAt", "DESC"]],
    });
    const { user } = req.session;
    render(Kabinet, { user, post, users, friends }, res);
  } catch (error) {
    console.log("error", error);
    res.end();
  }
});

kabinetRouter.delete("/delete/:id", async (req, res) => {
  console.log("=>", req.params);
  try {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log("error", error);
  }
});

kabinetRouter.get("/logout", checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("test");
    res.redirect("/");
  });
});

kabinetRouter.post("/like/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const findPost = await Post.findOne({ where: { id } });
    const like = await findPost.increment("countLike", { by: 1 });

    const { countLike } = like.get({ plain: true });
    res.json({ countLike });
  } catch (error) {}
});
kabinetRouter.post("/dislike/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const findPost = await Post.findOne({ where: { id } });

    const disLike = await findPost.increment("countDisLike", { by: 1 });
    const { countDisLike } = disLike.get({ plain: true });

    res.json({ countDisLike });
  } catch (error) {}
});

module.exports = kabinetRouter;
