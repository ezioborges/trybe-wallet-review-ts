import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, LoginReduxState } from "../type";
import { loginStateUpdate } from "../redux/actions";

function Login() {
  const dispatch: Dispatch = useDispatch()
  const loginState = useSelector((state: LoginReduxState) => state)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    return dispatch(loginStateUpdate(name, value))
  }
  
  return (
    <>
      <Form className="container-fluid">
        <div className="row p-5 shadow-lg bg-success rounded">
          <Form.Group className="mb-3">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={loginState.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              name="password"
              value={loginState.password}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="col d-flex justify-content-center">
            <Button className="btn-danger">Entrar</Button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default Login;
