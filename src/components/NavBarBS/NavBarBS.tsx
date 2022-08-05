import { NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import "./Styles.css";
import Logo from "../../assets/Images/logo192.png";



function NavBarBS() {
  return (
    <>
        <div>
            <Navbar className="navbar" variant="dark" expand="lg">
            <Container>
                <a href="/"><img src={Logo} /></a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavItem>   <Link className="nav-link" to="/">Início</Link> </NavItem>
                <NavItem>   <Link className="nav-link" to="/rent">Alugue Aqui</Link> </NavItem>
                    <Nav.Link href="#contact">Contato</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>

    </>
  );
}

export default NavBarBS;