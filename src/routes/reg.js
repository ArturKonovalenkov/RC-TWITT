const express = require("express");
const bcrypt = require("bcrypt");

const regRouter = express.Router();
const { User } = require("../../db/models");

const render = require("../lib/render");

const Registration = require("../../views/reg-log/Reg");

regRouter.get("/", async (req, res) => {
  const newUser = await User.findAll({ raw: true });
  render(Registration, { newUser }, res, req);
});

regRouter.post("/", async (req, res) => {
  const { login, email, password, status } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.findOne({ where: { login }, raw: true });
    if (user) {
      res.json({ err: "Такой пользователь уже есть" });
    } else {
      const newUser = await User.create({
        login,
        email,
        password: hash,
        status,
      });
      const data = newUser.get({ plain: true });
      req.session.user = data;
      req.session.save(() => {
        res.json({ message: "ok" });
      });
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = regRouter;
