import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/customer.css";

function HeroSection() {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center">

                    {/* ================= HERO CONTENT ================= */}

                    <Col lg={6}>

                        <span className="hero-badge">
                            PREMIUM BARBER SHOP
                        </span>

                        <h1 className="hero-title">
                            Director's Cut
                        </h1>

                        <h2 className="hero-subtitle">
                            Precision. Style. Confidence.
                        </h2>

                        <p className="hero-description">
                            Experience premium grooming with our skilled
                            barbers, modern equipment, and effortless online
                            appointment booking.
                        </p>

                        <div className="hero-buttons">

                            {/* BOOK APPOINTMENT */}

                            <Link
                                to="/book-appointment"
                                className="hero-button hero-button-primary"
                            >
                                Book Appointment
                            </Link>

                            {/* EXPLORE SERVICES */}

                            <Link
                                to="/services"
                                className="hero-button hero-button-secondary"
                            >
                                Explore Services
                            </Link>

                        </div>

                    </Col>

                    {/* ================= HERO IMAGE ================= */}

                    <Col lg={6}>

                        <img
                            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900"
                            alt="Director's Cut Barber"
                            className="hero-image"
                        />

                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default HeroSection;