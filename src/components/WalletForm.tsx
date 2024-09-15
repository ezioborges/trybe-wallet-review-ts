import { useEffect } from "react";
import "../styles/wallet-form.css";
import { useDispatch, useSelector } from "react-redux";
import { actionHandleChangeInput, fetchCurrencies } from "../redux/actions";
import { CurrenciesReduxState, Dispatch } from "../types/stateTypes";

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const currenciesState = useSelector(
    (state: CurrenciesReduxState) => state.currenciesReducer
  );
  const currenciesKeys = useSelector(
    (state: CurrenciesReduxState) => state.currenciesReducer.currencies
  );

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;

    return dispatch(actionHandleChangeInput(name, value));
  };

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);
  return (
    <form>
      <div className="row d-flex justify-content-between bg-wallet-form">
        <div className="col d-flex align-items-center p-4">
          <label
            htmlFor="value-input"
            className="form-label text-white fw-bolder"
          >
            Valor
          </label>
          <input
            data-testid="value-input"
            name="value"
            value={currenciesState.value}
            type="text"
            className="form-control mx-2"
            id="value-input"
            aria-describedby="value"
            onChange={handleChange}
          />
        </div>
        <div className="col d-flex align-items-center p-4">
          <label htmlFor="currency" className="text-white fw-bolder">
            Moeda
          </label>
          <select
            className="form-select mx-2"
            aria-label="moedas"
            data-testid="currency-input"
            name="currency"
            value={currenciesState.currency}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Selecione uma moeda
            </option>
            {currenciesKeys.map((curr: string) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
        <div className="col d-flex align-items-center p-4">
          <label htmlFor="method" className="text-white fw-bolder">
            Método de pagamento
          </label>
          <select
            className="form-select form-control"
            aria-label="método de pagamento"
            name="method"
            value={currenciesState.method}
            data-testid="method-input"
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Selecione um método
            </option>
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </div>
        <div className="col d-flex align-items-center p-4">
          <label htmlFor="tag" className="text-white fw-bolder">
            Categoria
          </label>
          <select
            className="form-select mx-2"
            aria-label="tags"
            name="tag"
            value={currenciesState.tag}
            data-testid="tag-input"
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Selecione uma categoria
            </option>
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </div>
        <div className="col d-flex align-items-center p-4">
          <label
            htmlFor="description"
            className="form-label text-white fw-bolder"
          >
            Descrição
          </label>
          <input
            data-testid="description-input"
            name="description"
            type="text"
            value={currenciesState.description}
            className="form-control mx-2"
            id="description"
            aria-describedby="description"
            onChange={handleChange}
          />
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center p-4">
          <button type="submit" className="btn btn-danger fw-bolder">
            Adicionar
          </button>
        </div>
      </div>
    </form>
  );
}

export default WalletForm;
