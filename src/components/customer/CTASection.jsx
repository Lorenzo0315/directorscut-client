import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CTASection() {
    return (
        <section className="cta-section">

            <Container className="text-center">

                <span className="section-badge">
                    BOOK TODAY
                </span>

                <h2 className="cta-title">
                    Ready For Your Next Haircut?
                </h2>

                <p className="cta-subtitle">
                    Experience premium grooming, skilled barbers,
                    and exceptional customer service.
                    Book your appointment today and leave looking your best.
                </p>

                <Button
                    as={Link}
                    to="/book-appointment"
                    variant="warning"
                    size="lg"
                    className="cta-button"
                >
                    Book Appointment
                </Button>

            </Container>

        </section>
    );
}

export default CTASection;