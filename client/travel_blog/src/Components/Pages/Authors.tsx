import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { MdPerson } from "react-icons/md";
import GrowButton from '../GrowButton'
import styles from '../../CSS/Authors.module.css'

interface Author {
    _id: string;
    username: string;
    name: string;
    bio: string;
    pic: string;
}
  
interface AuthorsProps {
    authors: Author[];
  }

function Authors( { authors }: AuthorsProps) {

    // Create the Author List
    const authorList = authors.map(author => {
        return (
            <Col key={author._id} xs={12} lg={4}>
                <Card className={styles.author + ' mb-4 shadow border border-0 rounded-0 bg-light h-100'}>
                    {author.pic && <Card.Img className='rounded-0' variant="top" src={author.pic} />}
                    <Card.Body className='d-flex flex-column align-items-start'>
                        <Card.Title>{author.name}</Card.Title>
                        <Card.Text className='flex-fill'>{author.bio}</Card.Text>
                        <Link to={`/author/${author._id}`}><GrowButton variant='primary' type='button' start='150px' end='220px'>View Author <MdPerson className='mb-1' size={20} /></GrowButton></Link>
                    </Card.Body>
                </Card>
            </Col>
        )
    }) 

    return (
        <Container>
            <h1 className='display-5 mb-4'>View All Authors</h1>
            <Row className='justify-content-center g-4 mb-5'>{authorList}</Row>
        </Container>
    )
}

export default Authors