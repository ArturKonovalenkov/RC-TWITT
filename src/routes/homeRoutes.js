require("@babel/register");
const express = require("express");
const homeRouter = express.Router();
const { checkUser, secureRoute } = require("../lib/middlewares/common");

const render = require("../lib/render");
const Home = require("../../views/Routs-Views/Home");

homeRouter.get("/", secureRoute, async (req, res) => {
  try {
    const { user } = req.session;
    render(Home, { user }, res);
  } catch (error) {
    console.log("error", error);
    res.end;
  }
});

homeRouter.get("/logout", checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("test");
    res.redirect("/");
  });
});

// homeRouter.delete("/delete/:id", checkUser, async (req, res) => {
//   try {
//     const { id } = req.params;
//     await User.destroy({ where: { id } });
//     res.end();
//   } catch (error) {
//     console.log("delete", error);
//     res.end();
//   }
// });

module.exports = homeRouter;
