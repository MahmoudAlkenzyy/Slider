
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from './Nav.module.css'
function NavScrollExample() {
  return (
    <Navbar  className={`${style.nav} navbar-dark  `  } expand="lg" >
      <Container inverse fluid>
        <Navbar.Brand href="/home/homaPage">MOVA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '150px' }} navbarScroll >
           
         
            <NavDropdown title={<span className='text-light'>Link</span>} id="navbarScrollingDropdown" className={`${style.link} text-light`}>
              <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
            <Form.Control type="search" placeholder="Search" className={`${style.form}`}
              aria-label="Search"
            />
            <Nav.Link href="/" className={style.link}>sign up</Nav.Link>
          
          <Nav.Link href="/home/login" className={`${style.link} `} >login</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;