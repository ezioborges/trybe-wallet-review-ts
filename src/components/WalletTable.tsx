function WalletTable() {
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
        <tbody>{/* aqui vai ser os ele mentos do table body*/}</tbody>
      </table>
    </div>
  );
}

export default WalletTable;
