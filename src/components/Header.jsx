export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            // peguei o virus do Mika.... não criei um logo usei o favicon
            src="favicon.ico"
            alt="Logo"
            width="25"
            height="24"
            className="d-inline-block align-text-top"
          />
          Appharma
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Medicamentos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Farmácias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
