import { Link } from 'react-router-dom';

export const HeaderOn = () => {
  // Alterar o valor menu para true quando for validado o login

  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3" to="/">
          <img
            src="LogoAppharma.png"
            alt="Logo"
            width="45"
            height="45"
            className="d-inline-block align-text-top mx-3"
          />
          Pharmacy Central System
        </Link>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link fs-4" aria-current="page" to="/med">
              Medicamentos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-4" to="/farma">
              Farmácias
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-4" to="/sair">
              Sair
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
