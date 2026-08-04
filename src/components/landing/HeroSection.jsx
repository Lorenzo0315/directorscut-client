import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hero-barber.jpg";

function HeroSection() {
    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(15,23,42,.75),
                        rgba(15,23,42,.75)
                    ),
                    url(${heroImage})
                `
            }}
        >
            <Container>

                <div className="hero-content">

                    <span className="hero-badge">
                        PREMIUM BARBER SHOP
                    </span>

                    <h1 className="hero-title">
                        Precision.
                        <br />
                        <span>Style.</span>
                        <br />
                        Confidence.
                    </h1>

                    <p className="hero-text">
                        Experience premium grooming with skilled barbers,
                        modern equipment, and effortless online appointment
                        booking.
                    </p>

                    <div className="hero-buttons">

                        <Button
                            as={Link}
                            to="/register"
                            className="hero-btn"
                            variant="warning"
                            size="lg"
                        >
                            Book Appointment
                        </Button>

                        <Button
                            as={Link}
                            to="/login"
                            className="hero-btn-outline"
                            variant="outline-light"
                            size="lg"
                        >
                            Login
                        </Button>

                    </div>

                </div>

            </Container>
        </section>
    );
}

export default HeroSection;