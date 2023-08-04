import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Post from '../Post';

interface Blog {
  _id: string;
  title: string;
  author: Author;
  pic: string;
  date: Date;
  body: string;
  comments: [];
}

interface Author {
  _id: string;
  username: string;
  name: string;
  bio: string;
  pic: string;
}

interface BlogsProps {
  blogs: Blog[];
}

function Blogs( { blogs }: BlogsProps ) {
    
  // Create the Blog List
  const blogList = blogs.map(blog => {
    return (
      <Post key={blog._id} blog={blog} />
    )
  }) 

  return (
    <Container>
        <h1 className='display-5 mb-4'>View All Blogs</h1>
        <Row className='justify-content-center g-4 mx-2 mb-5 p-0'>{blogList}</Row>
    </Container>
  )
}

export default Blogs