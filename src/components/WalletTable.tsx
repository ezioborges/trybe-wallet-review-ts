import { useSelector } from "react-redux";
import { WalletReducerStateType } from "../types/stateTypes";
import { updatedValue } from "../utils/updateValues";

function WalletTable() {
  const globalExpenses = useSelector((state: WalletReducerStateType) => state.walletReducer.expenses)
  console.log("🚀 ~ WalletTable ~ globalExpenses:", globalExpenses)
  
  return (
    <div className="d-flex justify-content-center">
      <table className="table table-primary table-hover">
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moedas</th>
            <th scope="col">Cambio Utilizado</th>
            <th scope="col">Valor Convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {globalExpenses && (
            globalExpenses.map(({id, description, tag, method, value}) => (
              <tr key={id}>
                <td>
                  {description}
                </td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ updatedValue(value) }</td>
              </tr>
            ))
          ) }
        </tbody>
      </table>
    </div>
  );
}

export default WalletTable;
