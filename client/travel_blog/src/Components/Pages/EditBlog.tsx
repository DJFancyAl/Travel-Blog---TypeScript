import { useParams } from 'react-router-dom';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { MdEditNote } from "react-icons/md";
import GrowButton from '../GrowButton'

interface Blog {
    _id: string;
    title: string;
    pic: string;
    body: string;
}

function EditBlog() {    
    // State
    const {id} = useParams()
    const navigate = useNavigate()
    const [editedBlog, setEditedBlog] = useState<Blog>({_id: '', title: '', pic: '', body: ''})

    // Handle Change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setEditedBlog({
        ...editedBlog,
        [id]: value
        })
    }

    // Handle Form Submit
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:3001/blogs/${id}`, {
        method: "put",
        headers: {
            'Content-Type': 'application/json',
            "x-access-token": localStorage.getItem('token') || ''
        },
        body: JSON.stringify(editedBlog)
        })
        const data = await response.json()
        if(data.message){
            navigate(`/blog/${editedBlog._id}`)
        }
    }

    // Fetch Blog
    useEffect(() => {
        async function getBlog() {
        const response = await fetch(`http://localhost:3001/blogs/${id}`)
        const data = await response.json();
        setEditedBlog(data)
        }

        getBlog()
    }, [id])

    return (
        <Container>
            <h1>Edit Your Blog</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control type="text" placeholder="Your title..." onChange={handleChange} value={editedBlog.title} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pic">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Your photo..." onChange={handleChange} value={editedBlog.pic} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="body">
                    <Form.Label>Post Body</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder='Write your blog...' onChange={handleChange} value={editedBlog.body} />
                </Form.Group>

                <GrowButton variant='primary' type='submit' start='120px'>
                    Edit Blog <MdEditNote className='mb-1' size={20} />
                </GrowButton>
            </Form>
        </Container>
    )
}

export default EditBlog