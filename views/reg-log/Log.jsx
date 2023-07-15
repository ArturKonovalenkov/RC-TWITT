const React = require("react");
const Layout = require("../Layout");

function Login() {
  return (
    <Layout>
      <div className="login_registr">
          <h2 className="logTitle">Авторизируйтесь</h2>        
          <hr />
          <script defer src="/js/log-fetch.js" />
          <form action="/login" method="POST" id="logForm">
            <label htmlFor="login-input" className="form-label">
              login
            </label>
            <input
              name="login"
              type="text"
              className="form-control"
              id="email-input"
            />
            <label htmlFor="password-input" className="form-label">
              Пароль
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password-input"
            />
            <button type="submit" className="btn btn-primary">
              Вход
            </button>
          </form>
          <hr />
        </div>
    </Layout>
  );
}

module.exports = Login;
