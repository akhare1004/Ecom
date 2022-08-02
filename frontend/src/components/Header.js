import React from 'react'
import { Link, Route,Routes, useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'

const Header = () => {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(logout())
  }
  
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Nameholder</Navbar.Brand>
          </Link>
          <SearchBox />
          <Nav className="ml-auto">
            <Link to='/cart' className='nav-link'>
              <i className='fas fa-shopping-cart'></i> Cart
            </Link>
              {userInfo ? (
                <NavDropdown title ={userInfo.name} id='username'>
                  <NavDropdown.Item>
                    <Link to='/profile'>Profile</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : 
              <Link to='/login' className='nav-link'>
              <i className='fas fa-user'></i> Sign In
            </Link>
            }
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title ='Admin' id='admin'>
              <NavDropdown.Item>
                <Link to='/admin/userlist'>Users</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/admin/productlist'>Products</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/admin/orderlist'>Orders</Link>
              </NavDropdown.Item>
             
            </NavDropdown>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
