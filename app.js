require("dotenv").config();
require("@babel/register");

const morgan = require("morgan");
const express = require("express");

const { secureRoute, checkUser } = require("./src/lib/middlewares/common");

const app = express();
const path = require("path");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

const { PORT } = process.env;

const sessionConfig = {
  name: "test",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

// импорт роутов
const homeRouter = require("./src/routes/homeRoutes");
const regRouter = require("./src/routes/reg");
const logRouter = require("./src/routes/log");
const kabinetRouter = require("./src/routes/kabinetRouter");
const lentaRouter = require("./src/routes/lentaRouter");
const editRouter = require("./src/routes/editRoutes");
const editAdminRouter = require("./src/routes/editAdminRouter");
const apiRouter = require("./src/routes/api");
const friendsRouter = require("./src/routes/friends");
const pravilaRouter = require("./src/routes/pravila");

app.use(express.static(path.resolve("public")));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

//роутеры
app.use("/", homeRouter);
app.use("/registration", secureRoute, regRouter);
app.use("/Login", secureRoute, logRouter);
app.use("/kabinet", checkUser, kabinetRouter);
app.use("/lenta", checkUser, lentaRouter);
app.use("/edit", checkUser, editRouter);
app.use("/editadmin", checkUser, editAdminRouter);
app.use("/api", checkUser, apiRouter);
app.use("/friends", checkUser, friendsRouter);
app.use("/pravila", secureRoute, pravilaRouter);

// изменить ковычки на бектики
app.listen(PORT, () => {
  console.log(`Сервер крутится на ${PORT} порту!`);
});
