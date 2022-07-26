import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarAdmin() {
  const [state, dispatch] = useContext(UserContext)

  let navigate = useNavigate()

  const logout = () => {
      console.log(state)
      dispatch({
          type: "LOGOUT"
      })
      navigate("/auth")
  }

  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={logo} style={{ maxWidth: '50px' }} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link as={Link} to="/admin/complain" style={{ color:'white' }}>Complain</Nav.Link>
            {/* <Nav.Link as={Link} to="/#" style={{ color:'white' }}>Transaction</Nav.Link> */}
            <Nav.Link as={Link} to="/admin" style={{ color:'white' }} >Category</Nav.Link>
            <Nav.Link as={Link} to="/admin/product" style={{ color:'white' }}>Product</Nav.Link>
            <Nav.Link onClick={logout} style={{ color:'white' }} >Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;