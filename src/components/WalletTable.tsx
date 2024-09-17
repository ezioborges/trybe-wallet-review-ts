import { useDispatch, useSelector } from "react-redux";
import { Dispatch, TableExpensesType, WalletReducerStateType } from "../types/stateTypes";
import { updatedValue } from "../utils/updateValues";
import { newExpensesArray } from "../redux/actions";

function WalletTable() {
  const dispatch: Dispatch = useDispatch();
  const globalExpenses = useSelector(
    (state: WalletReducerStateType) =>
      state.walletReducer.expenses as TableExpensesType[]
  );

  const handleDelete = (id: number) => {
    const filteredItems = globalExpenses.filter(
      (expense) => expense.id !== +id
    );

    dispatch(newExpensesArray(filteredItems))
    console.log("🚀 ~ WalletTable ~ filteredItems:", filteredItems);
  };

  return (
    <div className="d-flex justify-content-center">
      <table className="table table-primary table-hover">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Descrição
            </th>
            <th scope="col" className="text-center">
              Tag
            </th>
            <th scope="col" className="text-center">
              Método de pagamento
            </th>
            <th scope="col" className="text-center">
              Valor
            </th>
            <th scope="col" className="text-center">
              Moedas
            </th>
            <th scope="col" className="text-center">
              Cambio Utilizado
            </th>
            <th scope="col" className="text-center">
              Valor Convertido
            </th>
            <th scope="col" className="text-center">
              Moeda de conversão
            </th>
            <th scope="col" className="text-center">
              Editar/Excluir
            </th>
          </tr>
        </thead>
        <tbody>
          {globalExpenses &&
            globalExpenses.map((expenses) => (
              <tr key={expenses.id}>
                <td className="text-center">{expenses.description}</td>
                <td className="text-center">{expenses.tag}</td>
                <td className="text-center">{expenses.method}</td>
                <td className="text-center">{updatedValue(expenses.value)}</td>
                <td className="text-center">
                  {expenses.exchangeRate[expenses.currency].name}
                </td>
                <td className="text-center">
                  {(expenses.exchangeRate[expenses.currency].ask * 1)
                    .toFixed(2)
                    .replace(".", ",")}
                </td>
                <td className="text-center">
                  {(
                    expenses.exchangeRate[expenses.currency].ask *
                    +expenses.value
                  )
                    .toFixed(2)
                    .replace(".", ",")}
                </td>
                <td className="text-center">{expenses.currency}</td>
                <td className="text-center">
                  <button className="me-2 btn btn-success">Editar</button>
                  <button
                    className="btn btn-danger btn-small"
                    onClick={() => handleDelete(expenses.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default WalletTable;
