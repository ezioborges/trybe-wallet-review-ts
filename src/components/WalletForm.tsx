import "../styles/wallet-form.css";

function WalletForm() {
  return (
    <>
      <form>
        <div className="row d-flex justify-content-between bg-wallet-form">
          <div className="col d-flex align-items-center p-4">
            <label htmlFor="value-input" className="form-label text-white fw-bolder">
              Valor
            </label>
            <input
              data-testid="value-input"
              type="text"
              className="form-control mx-2"
              id="value-input"
              aria-describedby="value"
            />
          </div>
          <div className="col d-flex align-items-center p-4">
            <label htmlFor="currency" className="text-white fw-bolder">Moeda</label>
            {/* fazer requisição das moedas na API*/}
            <select
              className="form-select mx-2"
              aria-label="moedas"
              data-testid="currency-input"
              name="currency"
            >
              <option selected className="text-white fw-bolder">Aqui vai ser as moedas</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col d-flex align-items-center p-4">
            <label htmlFor="method" className="text-white fw-bolder">Método de pagamento</label>
            <select
              className="form-select form-control"
              aria-label="método de pagamento"
              name="method"
              data-testid="method-input"
            >
              <option selected>Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </div>
          <div className="col d-flex align-items-center p-4">
            <label htmlFor="tag" className="text-white fw-bolder">Categoria</label>
            <select
              className="form-select mx-2"
              aria-label="tags"
              name="tag"
              data-testid="tag-input"
            >
              <option selected>Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </div>
          <div className="col d-flex align-items-center p-4">
            <label htmlFor="description" className="form-label text-white fw-bolder">
              Descrição
            </label>
            <input
              data-testid="description-input"
              type="text"
              className="form-control mx-2"
              id="description"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="col-1 d-flex align-items-center justify-content-center p-4">
            <button type="submit" className="btn btn-danger fw-bolder">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default WalletForm;
