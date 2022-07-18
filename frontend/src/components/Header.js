import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Nameholder</Navbar.Brand>
          </Link>
          <Nav className="ml-auto">
            <Link to='/cart' className='nav-link'>
              <i className='fas fa-shopping-cart'></i> Cart
            </Link>
            <Link to='/login' className='nav-link'>
              <i className='fas fa-user'></i> Sign In
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
