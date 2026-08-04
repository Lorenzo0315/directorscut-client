import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BarbersSection({ barbers }) {

    return (

        <section
            className="barbers-section"
            id="barbers"
        >

            <Container>

                <div className="text-center mb-5">

                    <span className="section-subtitle">
                        OUR BARBERS
                    </span>

                    <h2 className="section-title">
                        Meet Our Professionals
                    </h2>

                    <p className="section-description mx-auto">

                        Every haircut is delivered with precision,
                        creativity, and years of experience.

                    </p>

                </div>

                <Row className="g-4">

                    {barbers.map(barber => (

                        <Col
                            lg={4}
                            md={6}
                            key={barber.barberId}
                        >

                            <Card className="barber-card">

                                <div className="barber-image-wrapper">

                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                        alt=""
                                        className="barber-image"
                                    />

                                </div>

                                <Card.Body className="text-center">

                                    <h4 className="fw-bold">

                                        {barber.fullName}

                                    </h4>

                                    <p className="barber-specialization">

                                        {barber.specialization}

                                    </p>

                                    <Badge
                                        bg={
                                            barber.isAvailable
                                                ? "success"
                                                : "secondary"
                                        }
                                        className="availability-badge"
                                    >
                                        {barber.isAvailable
                                            ? "Available Today"
                                            : "Busy"}
                                    </Badge>

                                    <div className="rating mt-4">

                                        ⭐⭐⭐⭐⭐

                                    </div>

                                    <small className="text-muted">

                                        Trusted Professional Barber

                                    </small>

                                    <Button
                                        as={Link}
                                        to="/register"
                                        className="book-barber-btn mt-4"
                                    >
                                        Book This Barber
                                    </Button>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                </Row>

            </Container>

        </section>

    );

}

export default BarbersSection;