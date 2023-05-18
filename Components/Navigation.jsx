const React = require('react')

function Navigation ({user}){
    return (
        <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Главная
          </a>
        </li>
        {user ? (
          <>
            <li className="nav-item">
              <a className="nav-link disabled">Привет, 
              {user.name}!
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/auth/logout">
                выход
              </a>
            </li>
          </>
        ) : ( 
          <>
            <li className="nav-item">
              <a className="nav-link" href="/auth/register">
                Регистрация
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/auth/login">
                Вход
              </a>
            </li>
          </>
         )} 
      </ul> 
    )
}

module.exports = Navigation