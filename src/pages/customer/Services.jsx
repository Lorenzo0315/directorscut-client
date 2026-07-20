import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
    Spinner
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { getAllServices } from "../../services/serviceService";

import haircut from "../../assets/images/haircut.jpg";
import beard from "../../assets/images/beard.jpg";
import haircolor from "../../assets/images/haircolor.jpg";
import treatment from "../../assets/images/treatment.jpg";

function Services() {

    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        try {

            const data = await getAllServices();

            setServices(data);
            setFilteredServices(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {

        const filtered = services.filter((service) =>
            service.serviceName
                .toLowerCase()
                .includes(search.toLowerCase())
        );

        setFilteredServices(filtered);

    }, [search, services]);

    const getImage = (serviceName) => {

        const name = serviceName.toLowerCase();

        if (name.includes("haircut")) return haircut;
        if (name.includes("beard")) return beard;
        if (name.includes("color")) return haircolor;

        return treatment;
    };

    if (loading) {
        return (
            <div className="text-center py-5">
                <Spinner
                    animation="border"
                    variant="warning"
                />
            </div>
        );
    }

    return (
        <section className="services-page">

            <div className="services-hero">

                <Container>

                    <h1>Our Services</h1>

                    <p>
                        Premium grooming services designed
                        to help you look and feel your
                        absolute best.
                    </p>

                </Container>

            </div>

            <Container className="py-5">

                <Row className="mb-5 justify-content-center">

                    <Col lg={6}>

                        <Form.Control
                            type="text"
                            placeholder="Search services..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="service-search"
                        />

                    </Col>

                </Row>

                <Row className="g-4">

                    {filteredServices.map((service) => (

                        <Col
                            lg={4}
                            md={6}
                            key={service.serviceId}
                        >

                            <Card className="service-page-card h-100">

                                <Card.Img
                                    variant="top"
                                    src={getImage(service.serviceName)}
                                    className="service-page-image"
                                />

                                <Card.Body>

                                    <h4>
                                        {service.serviceName}
                                    </h4>

                                    <p>
                                        {service.description}
                                    </p>

                                    <div className="service-badges">

                                        <span className="price-badge">
                                            ₱{service.price}
                                        </span>

                                        <span className="duration-badge">
                                            {service.duration} mins
                                        </span>

                                    </div>

                                    <Button
                                        as={Link}
                                        to="/book-appointment"
                                        variant="warning"
                                        className="w-100 mt-4"
                                    >
                                        Book Now
                                    </Button>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                    {filteredServices.length === 0 && (
                        <Col>
                            <div className="text-center py-5">
                                <h5>No services found.</h5>
                            </div>
                        </Col>
                    )}

                </Row>

            </Container>

        </section>
    );
}

export default Services;