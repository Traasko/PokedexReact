import { Link } from "react-router-dom";

const Navigation = ({ children }) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              IPSSI
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-link">
                  Pokedex
                </Link>
                <Link to="/meteo" className="nav-link">
                  Météo
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Navigation;