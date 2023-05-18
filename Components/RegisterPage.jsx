const React = require('react')
const Layout = require('./Layout')

function RegisterPage(){
    return (
        <Layout>
      <h1>Регистрация</h1>
      <form id="register-form">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">
           Имя
          </label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="exampleInputLogin1"
            aria-describedby="loginHelp"
          />
        </div>
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
      <script src="/js/register.js" defer />
    </Layout>
    )
}



module.exports = RegisterPage