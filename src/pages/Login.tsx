import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, LoginReduxState } from "../types/stateTypes";
import {
  actionLoading,
  actionLoginErrors,
  actionResetForm,
  actionHandleChangeInput,
} from "../redux/actions";
import { saveUserLogin } from "../utils/localStorageData";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../utils/validations";

import "../styles/screen-size.css";

function Login() {
  const dispatch: Dispatch = useDispatch();
  const email = useSelector(
    (state: LoginReduxState) => state.loginReducer.email
  );
  const password = useSelector(
    (state: LoginReduxState) => state.loginReducer.password
  );
  const isLoading = useSelector(
    (state: LoginReduxState) => state.loginReducer.isLoading
  );
  const errorMessage = useSelector(
    (state: LoginReduxState) => state.loginReducer.errorMessage
  );
  const navigate = useNavigate();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    return dispatch(actionHandleChangeInput(name, value));
  };

  const resetForm = () => {
    dispatch(actionResetForm(email, password));
  };

  const handleClick = () => {
    dispatch(actionLoading(true));
    if (errosValidate()) {
      saveUserLogin(email, password);
      resetForm();
      navigate("/wallet");
      dispatch(actionLoading(false));
    }

    dispatch(actionLoading(false));
  };

  const errosValidate = () => {
    const errors = validateLogin(email, password);
    dispatch(actionLoginErrors(errors));

    return errors.length === 0;
  };

  if (isLoading) return <h1>Carregando...</h1>;

  return (
    <div className="d-flex justify-content-center align-items-center screen-full-size">
      <Form className="row p-5 shadow-lg bg-success rounded w-25">
        <Form.Group className="mb-3">
          <Form.Label className="fw-bolder text-white">Email: </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bolder text-white">
            Example textarea
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="col d-flex justify-content-center">
          <Button onClick={handleClick} className="btn-danger fw-bolder">
            Entrar
          </Button>
        </div>
        <ul className="d-flex flex-column align-items-center">
          {errorMessage &&
            errorMessage.map((err) => (
              <div
                key={err}
                className="mt-3 p-2 bg-danger-subtle d-flex justify-content-center rounded"
              >
                <span className="fw-bolder">{err}</span>
              </div>
            ))}
        </ul>
      </Form>
    </div>
  );
}

export default Login;
