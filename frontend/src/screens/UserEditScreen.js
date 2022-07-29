import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUser } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const UserEditScreen = () => {
    const { id } = useParams()
    const userId = id

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ isAdmin, setIsAdmin ] = useState(false)

    let location = useLocation()
    let navigate = useNavigate()

    const dispatch = useDispatch()
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userUpdate = useSelector((state) => state.userUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate

    useEffect(() => {
        if(successUpdate){
            dispatch({
                type: 'USER_UPDATE_RESET'
            })
            navigate('/admin/userlist')
        } else {
            if(!user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }
    }, [user, userId, dispatch, successUpdate, navigate]) 

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, isAdmin }))
    }

    return (
        <>
            <Link to='/admin/userlist' className='btn btn-light my-3'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit User</h1> <br></br>
                {loadingUpdate && <Loader />} 
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                    <Form onSubmit={submitHandler}>
                    <FormGroup controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </FormGroup>
                    <FormGroup controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </FormGroup>
                    <FormGroup controlId='isAdmin'>
                        <Form.Check type='checkbox' label='isAdmin' checked={isAdmin} onChange={(e) => setIsAdmin(e.target.check)}>
                        </Form.Check>
                    </FormGroup>
                    <br></br>
                    <Button type='submit' variant='primary'>
                        Update
                    </Button>
                </Form>
                )}
            </FormContainer>
        </>
  )
}

export default UserEditScreen