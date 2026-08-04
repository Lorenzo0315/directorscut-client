import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import {
    FaFacebookF,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

function FooterSection() {

    return (

        <footer className="footer-section">

            <Container>

                <Row className="gy-5">

                    <Col lg={4}>

                        <h2 className="footer-logo">
                            Director's Cut
                        </h2>

                        <p className="footer-text">

                            Premium grooming services
                            designed for modern gentlemen.

                            Experience precision,
                            confidence,
                            and exceptional service.

                        </p>

                        <div className="social-icons">

                            <a href="#">

                                <FaFacebookF />

                            </a>

                            <a href="#">

                                <FaInstagram />

                            </a>

                        </div>

                    </Col>

                    <Col lg={2}>

                        <h5 className="footer-title">

                            Quick Links

                        </h5>

                        <ul>

                            <li>

                                <a href="#services">

                                    Services

                                </a>

                            </li>

                            <li>

                                <a href="#barbers">

                                    Barbers

                                </a>

                            </li>

                            <li>

                                <a href="#about">

                                    About

                                </a>

                            </li>

                            <li>

                                <a href="#contact">

                                    Contact

                                </a>

                            </li>

                        </ul>

                    </Col>

                    <Col lg={3}>

                        <h5 className="footer-title">

                            Services

                        </h5>

                        <ul>

                            <li>Classic Haircut</li>

                            <li>Skin Fade</li>

                            <li>Beard Trim</li>

                            <li>Hair Coloring</li>

                        </ul>

                    </Col>

                    <Col lg={3}>

                        <h5 className="footer-title">

                            Contact

                        </h5>

                        <ul className="footer-contact">

                            <li>

                                <FaMapMarkerAlt />

                                Miputak,
                                Dipolog City

                            </li>

                            <li>

                                <FaPhoneAlt />

                                +63 912 345 6789

                            </li>

                            <li>

                                <FaEnvelope />

                                directorscut@gmail.com

                            </li>

                        </ul>

                    </Col>

                </Row>

                <hr />

                <div className="copyright">

                    © {new Date().getFullYear()} Director's Cut.
                    All Rights Reserved.

                </div>

            </Container>

        </footer>

    );

}

export default FooterSection;