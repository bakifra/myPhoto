const React = require('react')
const Navigation = require('./Navigation')

function Layout({children, user}){
    return (
        <html lang="ru">
      <head>
        {/* чтобы выводить нормально русский текст */}
        <meta charSet="UTF-8" />
        <title>PhotoProd</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <header>
        {/* <script src='/js/dobavlenie.js' defer /> */}
        <script src="/js/login.js" defer/>
          <Navigation user = {user}/>
        </header>
        <div className="container">{children}</div>
      </body>
    </html>
    )
}

module.exports = Layout