import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";

function CustomerNavbar() {
    return (
        <Navbar
            expand="lg"
            sticky="top"
            className="customer-navbar"
        >
            <Container>

                <Navbar.Brand
                    as={NavLink}
                    to="/home"
                    className="brand-logo"
                >
                    ✂ Director's Cut
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>

                    <Nav className="mx-auto">

                        <Nav.Link as={NavLink} to="/home">
                            Home
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/services">
                            Services
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/barbers">
                            Barbers
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/my-appointments">
                            My Appointments
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/my-payments">
                            Payments
                        </Nav.Link>

                    </Nav>

                    <div className="d-flex align-items-center gap-3">

                        <Button
                            as={NavLink}
                            to="/book-appointment"
                            className="book-btn"
                        >
                            <FaCalendarAlt className="me-2" />
                            Book Now
                        </Button>

                        <Nav>

                            <NavDropdown
                                align="end"
                                title={
                                    <>
                                        <FaUserCircle
                                            size={22}
                                            className="me-2"
                                        />
                                        Account
                                    </>
                                }
                            >

                                <NavDropdown.Item>
                                    My Profile
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    Settings
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item>
                                    Logout
                                </NavDropdown.Item>

                            </NavDropdown>

                        </Nav>

                    </div>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default CustomerNavbar;