import './navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode/dark_mode';

const Navigation = () => {

    return (
        <Navbar variant='light' expand='sm'>
            <Container>
                <p className='m-2 main-heading nav-link'> Video Games</p>
                <Navbar.Toggle
                    className='border-0'
                    aria-controls='responsive-navbar-nav'
                />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link eventKey="1" as={Link} to={'/'}>
                            Home
                        </Nav.Link>
                        <Nav.Link eventKey="2" as={Link} to={'/contact-us'}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <DarkMode />
        </Navbar>
    );
};

export default Navigation;
