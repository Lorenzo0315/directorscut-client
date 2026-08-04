import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CustomerNavbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <Navbar
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
            className="shadow"
        >
            <Container>

                <Navbar.Brand
                    as={Link}
                    to="/home"
                    className="fw-bold text-warning"
                >
                    Director's Cut
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar" />

                <Navbar.Collapse id="navbar">

                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/home">
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/services">
                            Services
                        </Nav.Link>

                        <Nav.Link as={Link} to="/barbers">
                            Barbers
                        </Nav.Link>

                        <Nav.Link as={Link} to="/book-appointment">
                            Book Appointment
                        </Nav.Link>

                        <Nav.Link as={Link} to="/my-appointments">
                            My Appointments
                        </Nav.Link>

                        <Nav.Link as={Link} to="/my-payments">
                            Payments
                        </Nav.Link>

                    </Nav>

                    <Button
                        variant="outline-warning"
                        onClick={logout}
                    >
                        Logout
                    </Button>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default CustomerNavbar;