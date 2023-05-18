const React = require('react')
const Layout = require('./Layout')

function RegisterPage(){
    return (
        <Layout>
      <h1>Регистрация</h1>
      <form id="register-form">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">
            Логин
          </label>
          <input
            type="login"
            name="login"
            className="form-control"
            id="exampleInputLogin1"
            aria-describedby="loginHelp"
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Почта
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Повторить пароль
          </label>
          <input
            type="password"
            name="password2"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Регистрация
        </button>
      </form>
      {/* <script src="/js/register.js" /> */}
    </Layout>
    )
}



module.exports = RegisterPage