import { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/userContext";

import logo from '../assets/logo.png'

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

export default function Auth() {
  let navigate = useNavigate();

  const [state] = useContext(UserContext);

  const checkAuth = () => {
    if (state.isLogin === true) {
      if(state.user.status == 'Customer'){
        navigate('/user')
      }else{
        navigate('/admin')
      }
    }
  };

  checkAuth();

  const [isRegister, setIsRegister] = useState(false);

  const switchLogin = () => {
    setIsRegister(false);
  };

  const switchRegister = () => {
    setIsRegister(true);
  };

  return (
    <div className="bg-black">
      <Container>
        <Row className="vh-100 d-flex align-items-center justify-content-center">
          <Col md="6">
            <img src={logo} className="img-fluid" style={{ width: "264px", height: "264px" }} alt="brand" />
            <div className="text-auth-header mt-4">Easy, Fast and Reliable</div>
            <p className="text-auth-parag mt-3">
              Go shopping for merchandise, just go to dumb merch <br /> shopping. the biggest merchandise in 
              <b style={{color: "white"}}> Indonesia</b>
            </p>
            <div className="mt-5">
              <button onClick={switchLogin} className="btn btn-login px-5">
                Login
              </button>
              <button onClick={switchRegister} className="btn btn-register px-5">
                Register
              </button>
            </div>
          </Col>
          <Col md="6">{isRegister ? <Register /> : <Login />}</Col>
        </Row>
      </Container>
    </div>
  );
}
