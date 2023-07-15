function checkUser(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

function secureRoute(req, res, next) {
  if (!req.session.user) {
    next();
  } else {
    res.redirect("/kabinet");
  }
}

function logSession(req, res, next) {
  console.log("Что в сессии==>", req.session);
  next();
}

module.exports = { checkUser, secureRoute, logSession };
