import { useState, useContext, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthorContext } from '../../Context/AuthorContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Fade from 'react-bootstrap/Fade';
import { MdPlayArrow } from "react-icons/md";
import GrowButton from '../GrowButton'

function Register() {
    // State
    const [newAuthor, setNewAuthor] = useState({})
    const [alert, setAlert] = useState({variant: '', message: ''})
    const [open, setOpen] = useState(false)
    const {setAuthor} = useContext(AuthorContext)
    const navigate = useNavigate()

    // Handle Change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setNewAuthor({
        ...newAuthor,
        [id]: value
        })
    }

    // Handle Form Submit
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const response = await fetch('http://localhost:3001/authors', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAuthor)
        })
        const data = await response.json()
        if(data.author) {
            localStorage.setItem("token", data.token)
            localStorage.setItem("author", data.author)
            setAuthor(data.author)
            setAlert({variant: 'success', message: `${data.author.username} account created!`})
            setOpen(true)
            setTimeout(() => navigate(`/authors/profile`), 1500)
        }
        if(data.error) {
            setAlert({variant: 'danger', message: data.error})
            setOpen(true)
            setTimeout(() => setOpen(false), 3000)
        }
    }

    return (
        <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <h1 className='mb-5 display-5'>Register:</h1>
                        <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Your Username..." onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Create Password" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" onChange={handleChange} />
                        </Form.Group>

                        <GrowButton variant='primary' type='submit' start='110px' end='200px'>
                            Register <MdPlayArrow className='mb-1' size={16} />
                        </GrowButton>

                        </Form>
                        <Fade in={open} className='mt-3'>
                            <div>
                                <Alert variant={alert.variant} onClose={() => setAlert({variant: '', message: ''})}>{alert.message}</Alert>
                            </div>
                        </Fade>
                    </Col>
                </Row>
        </Container>
    )
}

export default Register