import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Spinner
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { getAllServices } from "../../services/serviceService";

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

            const response = await getAllServices();

            // Support both API formats
            const serviceList = response.data ?? response;

            setServices(serviceList.slice(0, 4));

        }
        catch (error) {

            console.error("Failed to load services:", error);

            setServices([]);

        }
        finally {

            setLoading(false);

        }

    };

    const getImage = (serviceName = "") => {

        const name = serviceName.toLowerCase();

        if (name.includes("haircut")) return haircut;

        if (name.includes("beard")) return beard;

        if (
            name.includes("color") ||
            name.includes("colour")
        )
            return haircolor;

        return treatment;

    };

    if (loading) {

        return (

            <section className="featured-services py-5 text-center">

                <Spinner
                    animation="border"
                    variant="warning"
                />

            </section>

        );

    }

    return (

        <section className="featured-services py-5">

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

                {services.length === 0 ? (

                    <div className="text-center">

                        <h5>No services available.</h5>

                    </div>

                ) : (

                    <Row className="g-4">

                        {services.map((service) => (

                            <Col
                                lg={3}
                                md={6}
                                key={service.serviceId}
                            >

                                <Card className="service-card h-100 shadow-sm border-0">

                                    <Card.Img
                                        variant="top"
                                        src={getImage(service.serviceName)}
                                        className="service-image"
                                    />

                                    <Card.Body className="d-flex flex-column">

                                        <h5 className="service-title">
                                            {service.serviceName}
                                        </h5>

                                        <p className="service-description flex-grow-1">
                                            {service.description}
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center">

                                            <span className="service-price fw-bold text-warning">
                                                ₱{Number(service.price).toLocaleString()}
                                            </span>

                                            <span className="service-duration text-muted">
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

                )}

                <div className="text-center mt-5">

                    <Button
                        as={Link}
                        to="/services"
                        variant="outline-warning"
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