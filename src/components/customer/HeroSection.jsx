import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

function HeroSection() {
    return (
        <section className="hero-section">
            <Container>

                <Row className="align-items-center">

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

                            <PrimaryButton
                                as={Link}
                                to="/book-appointment"
                            >
                                Book Appointment
                            </PrimaryButton>

                            <SecondaryButton
                                as={Link}
                                to="/services"
                            >
                                Explore Services
                            </SecondaryButton>

                        </div>

                    </Col>

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