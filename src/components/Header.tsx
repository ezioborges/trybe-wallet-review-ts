import { getUser } from "../utils/users";

function Header() {
  const {email} = getUser()
  return (
    <nav className="navbar navbar-expand-lg bg-dark p-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-start w-75 px-5" >
          <a className="navbar-brand text-white">Wallet: { email }</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="d-flex justify-content-end px-5 collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-white fw-bolder"
                aria-current="page"
                href="/"
              >
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
