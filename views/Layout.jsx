const React = require('react');

function Layout({children, user}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='/css/clear.css' />
        <link rel='stylesheet' href='/css/style.css' />
        <link rel='stylesheet' href='/css/navbar.css' />
        <link rel='stylesheet' href='/css/footer.css' />
        <link rel='stylesheet' href='/css/kabinet.css' />
        <link rel='stylesheet' href='/css/home.css' />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous" />
        
        <title>RC-TWITT</title>
      </head>
      <body>
        <div className='container'>

        <header>
    <nav className="navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img className='img-logo' src="/images/devil.png" alt="logo" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
{user ? (<ul className="navbar-nav me-auto mb-2 mb-lg-0">           
          <li className="nav-item">
            <span className="link">Privet, {user.login} <img className='ava_navbar' src="/images/ava.jpeg" alt="" /></span>         
          </li>
          <li className="nav-item">
            <a className="link" href="/logout">ВЫХОД</a>
          </li>
        </ul>) 
        :
         (<ul className="navbar-nav me-auto mb-2 mb-lg-0">           
          <li className="nav-item">
            <a className="link" href="/registration">РЕГИСТРАЦИЯ</a>
          </li>
          <li className="nav-item">
            <a className="link" href="/login">ВХОД</a>
          </li>
         
        </ul>)}
        
      </div>
    </div>
  </nav>
    </header>
    <div className='main'>
          {children}
          </div>
          {user ?
          <footer className="footer">
          <div className='main_footer'>
            <ul className='table_footer'>
              <li className='li_table'>Создатель: Артур Коноваленков</li>
              <li className='li_table'>@2023</li>
            </ul>
          </div>
        </footer> : <footer className="footer">
  <div className='main_footer'>
    <ul className='table_footer'>
      <li className='li_table'>Создатель: Артур Коноваленков</li>
      <li className='li_table'><a href="/pravila">Правила</a></li>
      <li className='li_table'>@2023</li>
    </ul>
  </div>
</footer>
          }
          
          
          </div>
      </body>
    </html>
  );
}

module.exports = Layout;
