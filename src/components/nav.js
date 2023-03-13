
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBBtn, MDBInputGroup, MDBNavbarLink, MDBNavbarItem, MDBIcon, MDBNavbarBrand, MDBCollapse, MDBNavbarNav, MDBNavbar, MDBContainer, MDBNavbarToggler, MDBInput } from 'mdb-react-ui-kit';
import style from './Nav.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function NavScrollExample() {
  
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);
  return (
    // <Navbar sticky  className={`${style.nav} navbar-dark   `  } expand="lg" >
    //   <Container inverse fluid>
    //     <Navbar.Brand href="/home/homaPage">MOVA</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll" className="justify-content-end">
    //       <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '150px' }} navbarScroll >
           
         
    //       <MDBDropdown className='shadow-0'>
    //       <MDBDropdownToggle color='dark' className={style.drop}>Dropdown button</MDBDropdownToggle>
    //       <MDBDropdownMenu>
    //         <MDBDropdownItem link>Action</MDBDropdownItem>
    //         <MDBDropdownItem link>Another action</MDBDropdownItem>
    //         <MDBDropdownItem link>Something else here</MDBDropdownItem>
    //       </MDBDropdownMenu>
    //     </MDBDropdown>
    //       </Nav>
    //       <Form className="d-flex">
    //         <Form.Control type="search" placeholder="Search" className={`${style.form}  me-2`}
    //           aria-label="Search"
    //         /></Form>
    //         <Nav.Link href="/" className={style.link}>sign up</Nav.Link>
          
    //       <Nav.Link href="/home/login" className={`${style.link} `} >login</Nav.Link>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    
    
    <MDBNavbar expand='lg' dark sticky  className={`${style.nav}    `  }>
    <MDBContainer fluid inverse>
      <MDBNavbarToggler type='button' data-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}>
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
      <MDBNavbarBrand href="/home/homaPage"> <span className='mb-0 h4' > MOVA</span></MDBNavbarBrand>
      <MDBCollapse navbar show={showNavNoTogglerThird}>
        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          <MDBNavbarItem>
  
            <MDBNavbarLink active aria-current='page'href="/" className={style.link}>sign up </MDBNavbarLink>
            </MDBNavbarItem>
            
          <MDBNavbarItem>
            <MDBNavbarLink href="/home/login" className={`${style.link} `}>Log in</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            
          </MDBNavbarItem>
        </MDBNavbarNav>
        <MDBInput wrapperClass={`{style.form}`} label={<span className={` text-light`}>Search</span>} id='form2' type='password'/>

      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>




  );
}

export default NavScrollExample;