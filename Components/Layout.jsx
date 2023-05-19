const React = require("react");
const Navigation = require("./Navigation");

function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        {/* чтобы выводить нормально русский текст */}
        <meta charSet="UTF-8" />
        <title>PhotoProd</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <script defer src="/js/delPhoto.js" />
        <script defer src="/js/login.js" />
        <script defer src="/js/delPhotoPass.js" />
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
      </head>
      <body>
        <Navigation user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
