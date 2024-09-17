import { useEffect, useState } from "react";
import { addExpense, fetchCurrencies } from "../redux/actions";

import "../styles/wallet-form.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Dispatch,
  FormDataType,
  WalletReducerStateType,
} from "../types/stateTypes";
import { getCurrencies } from "../utils/getCurrencies";

function WalletForm() {
  const dispatch: Dispatch = useDispatch();

  const walletCurrenciesKeys = useSelector(
    (state: WalletReducerStateType) => state.walletReducer.currencies
  );

  const [expenseId, setExpenseId] = useState(0);
  const [formData, setFormData] = useState<FormDataType>({
    id: 0,
    value: 0,
    currency: "USD",
    method: "Dinheiro",
    tag: "Alimentação",
    description: "",
    exchangeValue: 0,
    exchangeRate: {},
  });

  const initialState = {
    id: 0,
    value: 0,
    currency: "USD",
    method: "Dinheiro",
    tag: "Alimentação",
    description: "",
    exchangeValue: 0,
    exchangeRate: {},
  };

  useEffect(() => {
    try {
      dispatch(fetchCurrencies());
    } catch (error) {
      console.error("Erro ao buscar moedas:", error);
    }
  }, [dispatch]);

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const buildExpenses = async () => {
    try {
      const currentId = expenseId; // pegado o expenseId atual;
      const exchange = await getCurrencies();

      const exchangeRate = exchange[formData.currency];
      const convertedValue = formData.value * exchangeRate.ask;

      const newFormData = {
        ...formData,
        exchangeRate: exchange,
        id: currentId, // adiciona o id atual no novo formData;
        exchangeValue: convertedValue,
      };

      setExpenseId((prevId) => prevId + 1); // só adiciona depois para que previna o erro de adicionar id sem a criação de uma nova despesa.

      return newFormData;
    } catch (error) {
      console.error("Erro ao criar despesa", error);
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedFormData = await buildExpenses();

    if (updatedFormData) {
      dispatch(addExpense(updatedFormData));
    }
    setFormData(initialState);
  };

  const { value, currency, method, tag, description } = formData;

  return (
    <form onSubmit={handleSubmit}>
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
            type="number"
            name="value"
            value={value}
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
            value={currency}
            onChange={handleChange}
          >
            {walletCurrenciesKeys.map((curr: string) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
        <div className="col d-flex align-items-center p-4">
          <select
            className="form-select form-control"
            aria-label="método de pagamento"
            name="method"
            value={method}
            data-testid="method-input"
            onChange={handleChange}
          >
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
            value={tag}
            data-testid="tag-input"
            onChange={handleChange}
          >
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
            value={description}
            className="form-control mx-2"
            id="description"
            aria-describedby="description"
            onChange={handleChange}
          />
        </div>
        <div className="col d-flex align-items-center justify-content-center p-2">
          <button type="submit" className="btn btn-danger fw-bolder">
            Adicionar despesa
          </button>
        </div>
      </div>
    </form>
  );
}

export default WalletForm;
