import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, LoginReduxState } from "../types/stateTypes";
import {
  actionLoginErrors,
  actionResetForm,
  loginStateUpdate,
} from "../redux/actions";
import { saveUserLogin } from "../utils/users";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../utils/validations";

function Login() {
  const dispatch: Dispatch = useDispatch();
  const loginState = useSelector((state: LoginReduxState) => state);
  const navigate = useNavigate();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    return dispatch(loginStateUpdate(name, value));
  };

  const resetForm = () => {
    const { email, password } = loginState;
    dispatch(actionResetForm(email, password));
  };

  const handleClick = () => {
    if (errosValidate()) {
      const { email, password } = loginState;
      saveUserLogin(email, password);
      resetForm();
      navigate("/wallet");
    }
  };

  const errosValidate = () => {
    const { email, password } = loginState;
    const errors = validateLogin(email, password);
    dispatch(actionLoginErrors(errors));

    return errors.length === 0;
  };

  return (
    <>
      <Form className="container-fluid">
        <div className="row p-5 shadow-lg bg-success rounded">
          <Form.Group className="mb-3">
            <Form.Label className="fw-bolder text-white">Email: </Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={loginState.email}
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
              value={loginState.password}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="col d-flex justify-content-center">
            <Button onClick={handleClick} className="btn-danger fw-bolder">
              Entrar
            </Button>
          </div>
        </div>
        <div className="row shadow-lg bg-danger-subtle">
          <ul>
            {loginState.errorMessage.map((err) => (
              <div key={err} className="mt-3">
                <span className="fw-bolder">{err}</span>
              </div>
            ))}
          </ul>
        </div>
      </Form>
    </>
  );
}

export default Login;
