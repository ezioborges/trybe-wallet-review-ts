import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from "../redux/actions";
import { Dispatch } from "../type";

function Login() {
    const dispatch: Dispatch = useDispatch()
    const exempleReducer = useSelector((state: ExempleReducerType) => state.exempleReducer);

    type ExempleReducerType = {
    exempleReducer: {
      count: number;
    };
  };

  return (
    <>
      <h1>Aqui é o login e teste do Redux</h1>
      <span>{exempleReducer.count}</span>
      <Button onClick={() => dispatch(incrementCount(1))}>Increment +1</Button>
      <Button variant="success" onClick={() => dispatch(incrementCount(5))}>Increment +5</Button>
    </>
  );
}

export default Login;
