import { ReactNode, useContext } from 'react'
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { AuthorContext } from '../Context/AuthorContext';
import { useNavigate } from "react-router-dom";
import { MdLogin, MdLogout, MdPersonAddAlt1, MdPerson2 } from "react-icons/md";
import travelBlogLogo from '../images/travel-blog-logo.png'

function NavBar() {
  const navigate = useNavigate();
  const {author, setAuthor} = useContext(AuthorContext)
  const style = { color: "inherit", textDecoration: "inherit" };

  // Logout
  const logout = () => {
    setAuthor({
      _id: '',
      username: '',
      name: '',
      bio: '',
      pic: ''
    });
    localStorage.clear();
    navigate("/");
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
                alt="Travel Blog Logo"
                src={travelBlogLogo}
                width="30"
                height="30"
                className="d-inline-block align-top me-3"
              />
            Milestone Travel Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={NavLink} to="/authors">Authors</Nav.Link>
            {author._id && <Nav.Link as={NavLink} to="/blog/new">Write Blog</Nav.Link>}
          </Nav>
          {author._id ? <Nav>
            <div>
              <Link to="/authors/profile" className="btn btn-dark me-3">
                Hello {author.username}! <MdPerson2 className="mb-1" size={18} />
              </Link>
              <Button onClick={logout}>Logout <MdLogout className="mb-1" size={18} /></Button>
            </div>
          </Nav>
          :
          <Nav>
            <div>
            <Link to="/authors/register" className="btn btn-dark me-3">
              Register <MdPersonAddAlt1 className="mb-1" size={18} />
            </Link>
            <Link to="/authors/login" className="btn btn-dark">
              Login <MdLogin size={20} />
            </Link>
            </div>
          </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
