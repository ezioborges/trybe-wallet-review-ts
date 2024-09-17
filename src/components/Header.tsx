import { Link } from "react-router-dom";
import { getUser } from "../utils/localStorageData";
import { useSelector } from "react-redux";
import { FormDataType, WalletReducerStateType } from "../types/stateTypes";

function Header() {
  const globalExpenses = useSelector(
    (state: WalletReducerStateType) => state.walletReducer.expenses as FormDataType[]
  );


  const totalGlobalExpenses = globalExpenses.reduce((total, expense) => (
    total + (expense.exchangeValue || 0)
  ), 0);


  const { email } = getUser();
  const editedValue = totalGlobalExpenses.toFixed(2).replace('.', ',')

  return (
    <nav className="navbar navbar-expand-lg bg-dark p-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-start w-75 px-5">
          <a className="navbar-brand text-white">Wallet: {email}</a>
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
        <div className="d-flex justify-content-between px-5 w-25">
          <div>
            <span className="text-white fw-bolder">{`Total das despesa em BRL: ${editedValue}`}</span>
          </div>
          <div>
            <Link to="/">
              <span
                className="nav-link active text-white fw-bolder"
                aria-current="page"
              >
                Sair
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
