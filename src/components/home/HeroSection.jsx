import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";

function HeroSection() {
    return (
        <section
            style={{
                background: "linear-gradient(135deg, #121212 0%, #1f1f1f 100%)",
                color: "#fff",
                minHeight: "85vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container>
                <Row className="align-items-center">

                    <Col lg={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >

                            <h5
                                style={{
                                    color: "#D4AF37",
                                    fontWeight: "600",
                                    letterSpacing: "3px",
                                }}
                            >
                                PREMIUM BARBER SHOP
                            </h5>

                            <h1
                                className="display-3 fw-bold mt-3"
                            >
                                Director's Cut
                            </h1>

                            <p
                                className="lead mt-4"
                                style={{ color: "#dcdcdc" }}
                            >
                                Look Sharp. Feel Confident.
                                Experience premium grooming from
                                our professional barbers.
                            </p>

                            <Button
                                variant="warning"
                                size="lg"
                                className="mt-3 px-4 py-3"
                            >
                                <FaCalendarCheck className="me-2" />
                                Book Appointment
                            </Button>

                        </motion.div>
                    </Col>

                    <Col lg={6} className="text-center">

                        <motion.img
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900"
                            alt="Barber"
                            className="img-fluid rounded-4 shadow-lg"
                        />

                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default HeroSection;