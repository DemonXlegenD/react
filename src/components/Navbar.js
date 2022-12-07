import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';



function NavScroll({string, setString}) {


  console.log(string)

  function handleChange(e) {
    setString(e.target.value)
    console.log(e.target.value)
  }

  return (

    <Navbar bg='light' expand="lg">
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
            <Nav.Link><Link to={"/"}>HOME</Link></Nav.Link>
            <Nav.Link><Link   to={"/films"}>FILMS</Link></Nav.Link>
            <NavDropdown title="CONNEXION" id="navbarScrollingDropdown">
              <NavDropdown.Item href="../public/inscription.html" target="_blank">Inscription</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Connexion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Sécurité    
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            
            <Button className="navsearch"variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
}


export default NavScroll; 

