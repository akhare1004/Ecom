import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { useLocation, useNavigate } from 'react-router-dom'

const LoginScreen = () => {
    
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    let location = useLocation()
    let navigate = useNavigate()

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo){
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect]) 

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
    <FormContainer>
        <h1>Sign In</h1> <br></br>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
            <FormGroup controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </FormGroup>
            <FormGroup controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='passwprd' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}>
                </Form.Control>
            </FormGroup>
            <br></br>
            <Button type='submit' variant='primary'>
                Sign In
            </Button>
        </Form>

        <Row className='py-3'>
            <Col>
                New Customer? <Link to={redirect ? `register?redirect=${redirect}` : '/register'}>Register</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginScreen
