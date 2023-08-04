import { useState, useContext, FormEvent, ChangeEvent } from 'react'
import { AuthorContext } from '../Context/AuthorContext';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { MdNoteAdd } from "react-icons/md";
import GrowButton from './GrowButton'


interface Blog {
    id: string;
}

interface CommentData {
    _id: string;
    author: Author;
    blog: Blog;
    date: string;
    title: string;
    body: string;
}

interface Author {
    _id: string;
    username: string;
    name: string;
    bio: string;
    pic: string;
}

type AddComment = (param: CommentData) => void;

interface NewCommentProps {
    blog: string | undefined;
    addComment: AddComment;
}

function NewComment( {blog, addComment}: NewCommentProps ) {
    // State
    const { author } = useContext(AuthorContext)
    const [comment, setComment] = useState({
        author: author._id,
        blog: blog,
        title: '',
        body: ''
    })

    // Handle Change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setComment({
        ...comment,
        [id]: value
        })
    }

    // Handle Submit
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:3001/comments`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            "x-access-token": localStorage.getItem('token') || ''
        },
        body: JSON.stringify(comment)
        })
        const data = await response.json()
        addComment(data)
        setComment({author: author._id, blog: blog, title: '', body: ''})
    }

    return (
        <Col xs={12} className='m-auto'>
            <hr />
            <h5>New Comment</h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Comment Title..." value={comment.title} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="body">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" placeholder="Write your comment..." rows={3} value={comment.body} onChange={handleChange} />
                </Form.Group>
                <GrowButton variant="primary" type="submit" start='180px' end='250px'>
                    Create Comment <MdNoteAdd className='mb-1' size={20} />
                </GrowButton>
            </Form>
        </Col>
    )
}

export default NewComment