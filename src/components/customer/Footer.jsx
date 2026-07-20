import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <Container>

                <Row className="gy-5">

                    <Col lg={4} md={6}>

                        <h3 className="footer-logo">
                            ✂ Director's Cut
                        </h3>

                        <p className="footer-text">
                            Director's Cut is committed to delivering premium
                            grooming services with skilled barbers, modern
                            equipment, and exceptional customer care.
                        </p>

                    </Col>

                    <Col lg={2} md={6}>

                        <h5 className="footer-title">
                            Quick Links
                        </h5>

                        <ul className="footer-links">

                            <li>
                                <Link to="/home">Home</Link>
                            </li>

                            <li>
                                <Link to="/services">Services</Link>
                            </li>

                            <li>
                                <Link to="/barbers">Barbers</Link>
                            </li>

                            <li>
                                <Link to="/book-appointment">
                                    Book Appointment
                                </Link>
                            </li>

                        </ul>

                    </Col>

                    <Col lg={3} md={6}>

                        <h5 className="footer-title">
                            Contact
                        </h5>

                        <p>
                            <FaMapMarkerAlt className="me-2" />
                            Manila, Philippines
                        </p>

                        <p>
                            <FaPhoneAlt className="me-2" />
                            +63 912 345 6789
                        </p>

                        <p>
                            <FaEnvelope className="me-2" />
                            directorscut@gmail.com
                        </p>

                    </Col>

                    <Col lg={3} md={6}>

                        <h5 className="footer-title">
                            Business Hours
                        </h5>

                        <p>Monday - Saturday</p>

                        <p>9:00 AM - 8:00 PM</p>

                        <div className="footer-social">

                            <a href="#">
                                <FaFacebookF />
                            </a>

                            <a href="#">
                                <FaInstagram />
                            </a>

                        </div>

                    </Col>

                </Row>

                <hr className="footer-divider" />

                <div className="footer-bottom">

                    © {new Date().getFullYear()} Director's Cut Barber Shop.
                    All Rights Reserved.

                </div>

            </Container>

        </footer>
    );
}

export default Footer;