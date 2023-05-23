import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
  return (
    <div>
        <Navbar bg="light" variant="light">
        <Container>
          <Link id="l1" to=''><Navbar.Brand ><i className="fa-solid fa-people-roof fa-2x"></i><strong className='ms-3'>Employee Management App</strong></Navbar.Brand></Link>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
    </div>
  )
}

export default Header