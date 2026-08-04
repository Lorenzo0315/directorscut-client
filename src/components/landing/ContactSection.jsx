import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock
} from "react-icons/fa";

function ContactSection() {

    return (

        <section
            id="contact"
            className="contact-section"
        >

            <Container>

                <Row className="align-items-center">

                    <Col lg={5}>

                        <span className="section-subtitle">

                            CONTACT US

                        </span>

                        <h2 className="section-title">

                            Visit Our Shop

                        </h2>

                        <p className="section-description">

                            We're always ready to give you
                            the perfect haircut and grooming
                            experience.

                        </p>

                        <div className="contact-card">

                            <FaMapMarkerAlt className="contact-icon"/>

                            <div>

                                <h5>Address</h5>

                                <p>
                                    Miputak,
                                    Dipolog City,
                                    Zamboanga del Norte
                                </p>

                            </div>

                        </div>

                        <div className="contact-card">

                            <FaPhoneAlt className="contact-icon"/>

                            <div>

                                <h5>Phone</h5>

                                <p>+63 912 345 6789</p>

                            </div>

                        </div>

                        <div className="contact-card">

                            <FaEnvelope className="contact-icon"/>

                            <div>

                                <h5>Email</h5>

                                <p>directorscut@gmail.com</p>

                            </div>

                        </div>

                        <div className="contact-card">

                            <FaClock className="contact-icon"/>

                            <div>

                                <h5>Opening Hours</h5>

                                <p>
                                    Monday - Saturday
                                    <br />
                                    9:00 AM – 8:00 PM
                                </p>

                            </div>

                        </div>

                    </Col>

                    <Col lg={7}>

                        <div className="map-wrapper">

                            <iframe
                                title="Director's Cut"
                                src="https://www.google.com/maps?q=Miputak,Dipolog+City&output=embed"
                                width="100%"
                                height="500"
                                style={{
                                    border:0
                                }}
                                loading="lazy"
                            />

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

}

export default ContactSection;