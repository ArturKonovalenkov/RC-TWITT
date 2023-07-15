require("@babel/register");
const express = require("express");
const lentaRouter = express.Router();
const { checkUser } = require("../lib/middlewares/common");
const { Post, User, Friend } = require("../../db/models");

const render = require("../lib/render");
const Lenta = require("../../views/Routs-Views/Lenta");

lentaRouter.get("/", async (req, res) => {
  try {
    const friends = await Friend.findAll({
      raw: true,
    });
    // console.log(friends);
    const users = await User.findAll({
      raw: true,
    });
    const post = await Post.findAll({
      raw: true,
      order: [["createdAt", "DESC"]],
    });
    // console.log("=>", post);
    const { user } = req.session;
    render(Lenta, { user, post, users, friends }, res);
  } catch (error) {
    console.log("error", error);
    res.end;
  }
});

lentaRouter.get("/logout", checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("test");
    res.redirect("/");
  });
});

lentaRouter.post("/like/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const findPost = await Post.findOne({ where: { id } });
    const like = await findPost.increment("countLike", { by: 1 });
    const { countLike } = like.get({ plain: true });
    res.json({ countLike });
  } catch (error) {}
});
lentaRouter.post("/dislike/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const findPost = await Post.findOne({ where: { id } });

    const disLike = await findPost.increment("countDisLike", { by: 1 });
    const { countDisLike } = disLike.get({ plain: true });

    res.json({ countDisLike });
  } catch (error) {}
});

lentaRouter.post("/create/:id", async (req, res) => {
  const { id } = req.params;
  const { user } = req.session;
  try {
    const friends = await Friend.findOne({
      where: { userId: user.id, friendsId: id },
    });
    if (friends) {
      res.json({ err: "Вы уже подписанны." });
    } else if (!friends) {
      await Friend.create({
        userId: user.id,
        friendsId: id,
      });

      res.json({ msg: "Вы подписались на пользователя" });
    }
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = lentaRouter;
