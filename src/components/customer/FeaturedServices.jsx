import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getServices } from "../../services/serviceService";

import haircut from "../../assets/images/haircut.jpg";
import beard from "../../assets/images/beard.jpg";
import haircolor from "../../assets/images/haircolor.jpg";
import treatment from "../../assets/images/treatment.jpg";

function FeaturedServices() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        try {
            const data = await getServices();

            // Show only the first 4 services
            setServices(data.slice(0, 4));
        } catch (error) {
            console.error("Failed to load services:", error);
        } finally {
            setLoading(false);
        }
    };

    const getImage = (serviceName) => {
        const name = serviceName.toLowerCase();

        if (name.includes("haircut")) return haircut;
        if (name.includes("beard")) return beard;
        if (name.includes("color")) return haircolor;

        return treatment;
    };

    if (loading) {
        return (
            <section className="featured-services py-5 text-center">
                <Spinner animation="border" variant="warning" />
            </section>
        );
    }

    return (
        <section className="featured-services">
            <Container>

                <div className="text-center mb-5">
                    <span className="section-badge">
                        Our Services
                    </span>

                    <h2 className="section-title">
                        Featured Grooming Services
                    </h2>

                    <p className="section-subtitle">
                        Experience premium barber services tailored to your style.
                    </p>
                </div>

                <Row className="g-4">
                    {services.map((service) => (
                        <Col
                            lg={3}
                            md={6}
                            key={service.serviceId}
                        >
                            <Card className="service-card h-100">

                                <Card.Img
                                    variant="top"
                                    src={getImage(service.serviceName)}
                                    className="service-image"
                                />

                                <Card.Body>

                                    <h5 className="service-title">
                                        {service.serviceName}
                                    </h5>

                                    <p className="service-description">
                                        {service.description}
                                    </p>

                                    <div className="service-info">
                                        <span className="service-price">
                                            ₱{service.price}
                                        </span>

                                        <span className="service-duration">
                                            {service.duration} mins
                                        </span>
                                    </div>

                                    <Button
                                        as={Link}
                                        to="/book-appointment"
                                        variant="warning"
                                        className="w-100 mt-3"
                                    >
                                        Book Now
                                    </Button>

                                </Card.Body>

                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-5">
                    <Button
                        as={Link}
                        to="/services"
                        variant="outline-dark"
                        size="lg"
                    >
                        View All Services
                    </Button>
                </div>

            </Container>
        </section>
    );
}

export default FeaturedServices;