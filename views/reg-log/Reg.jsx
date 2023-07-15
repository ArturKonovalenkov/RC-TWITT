const React = require("react");
const Layout = require("../Layout");

function Registration({newUser}) {
  return (
    <Layout>
      <div className="login_registr">
          <h2 className="regTitle">Зарегистрируйтесь</h2>
          <hr />
          <script defer src="/js/reg-fetch.js" />
          <form action="/registration" method="POST" id="regForm">
            <label htmlFor="username-input" className="form-label">
              Имя пользователя
            </label>
            <input
              name="login"
              type="text"
              className="form-control"
              id="login-input"
            />
            <label htmlFor="email-input" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
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

            <input
              name="status"
              type="hidden"
             value={"user"}
              className="form-control"
              id="password-input"
            />
            <button type= "submit" className="btn btn-primary"> Отправить</button>
           
          </form>
          <hr />
         
        </div>
    </Layout>
  );
}

module.exports = Registration;
