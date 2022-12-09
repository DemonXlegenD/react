
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

//Création de la navbar grâce à boostrap

function NavScroll({string, setString}) {

  function handleChange(e) {
    setString(e.target.value)
  }

  return (

    <Navbar bg='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><span className='text'>STREAMFY</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
          fill variant="tabs"
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link><Link className="nodeco" to={"/"}>HOME</Link></Nav.Link>
            <Nav.Link><Link className="nodeco" to={"/films"}>FILMS</Link></Nav.Link>
            <NavDropdown  title="CONNEXION" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="../public/inscription.html" target="_blank">Inscription</NavDropdown.Item>
              <NavDropdown.Item  href="#action4">
                Connexion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Sécurité
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
}


export default NavScroll; 

