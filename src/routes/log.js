const express = require("express");
const bcrypt = require("bcrypt");
const logRouter = express.Router();
const { User } = require("../../db/models");

const render = require("../lib/render");
const Login = require("../../views/reg-log/Log");

logRouter.get("/", (req, res) => {
  render(Login, {}, res, req);
});

logRouter.post("/", async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        const data = user.get({ plain: true });
        req.session.user = data;
        req.session.save(() => {
          res.json({ msg: "Вы успешно авторизованы!" });
        });
      } else {
        res.json({ err: "Пароль неверный" });
      }
    } else {
      res.json({ err: "Такой пользователь не найден" });
    }
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = logRouter;
