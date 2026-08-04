import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServicesSection({ services }) {
    return (
        <section className="services-section" id="services">

            <Container>

                <div className="text-center mb-5">

                    <span className="section-subtitle">
                        OUR SERVICES
                    </span>

                    <h2 className="section-title">
                        Grooming Services
                    </h2>

                    <p className="section-description mx-auto">
                        Premium haircuts, beard styling and grooming
                        services performed by experienced professionals.
                    </p>

                </div>

                <Row className="g-4">

                    {services.map(service => (

                        <Col
                            lg={4}
                            md={6}
                            key={service.serviceId}
                        >

                            <Card className="service-card">

                                <div className="service-image-wrapper">

                                    <Card.Img
                                        src={service.imageUrl}
                                        className="service-image"
                                    />

                                    <div className="price-tag">
                                        ₱{service.price}
                                    </div>

                                </div>

                                <Card.Body>

                                    <h4 className="fw-bold mb-3">
                                        {service.serviceName}
                                    </h4>

                                    <p className="text-muted mb-4">
                                        {service.description}
                                    </p>

                                    <div className="d-flex justify-content-between align-items-center">

                                        <span className="service-duration">
                                            ⏱ {service.duration} mins
                                        </span>

                                        <Button
                                            as={Link}
                                            to="/register"
                                            className="book-service-btn"
                                        >
                                            Book
                                        </Button>

                                    </div>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                </Row>

            </Container>

        </section>
    );
}

export default ServicesSection;