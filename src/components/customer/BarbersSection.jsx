import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Badge,
    Button,
    Spinner
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { getBarbers } from "../../services/barberService";

import barber1 from "../../assets/images/barber1.png";
import barber2 from "../../assets/images/barber2.png";
import barber3 from "../../assets/images/barber3.png";

function BarbersSection() {

    const [barbers, setBarbers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBarbers();
    }, []);

    const loadBarbers = async () => {

        try {

            const data = await getBarbers();

            // Only display first 3 barbers on Home page
            setBarbers(data.slice(0, 3));

        }
        catch (error) {

            console.error("Failed to load barbers:", error);

        }
        finally {

            setLoading(false);

        }

    };

    const barberImages = [
        barber1,
        barber2,
        barber3
    ];

    if (loading) {

        return (
            <section className="barbers-section py-5 text-center">
                <Spinner animation="border" variant="warning" />
            </section>
        );

    }

    return (

        <section className="barbers-section">

            <Container>

                <div className="text-center mb-5">

                    <span className="section-badge">
                        OUR TEAM
                    </span>

                    <h2 className="section-title">
                        Meet Our Professional Barbers
                    </h2>

                    <p className="section-subtitle">
                        Our experienced barbers combine classic techniques
                        with modern styling to give you the perfect look.
                    </p>

                </div>

                <Row className="g-4">

                    {barbers.length > 0 ? (

                        barbers.map((barber, index) => (

                            <Col
                                lg={4}
                                md={6}
                                key={barber.barberId}
                            >

                                <Card className="barber-card h-100 shadow-sm border-0">

                                    <Card.Img
                                        variant="top"
                                        src={barberImages[index % barberImages.length]}
                                        className="barber-image"
                                    />

                                    <Card.Body>

                                        <h4 className="barber-name">
                                            {barber.fullName}
                                        </h4>

                                        <p className="barber-specialization">
                                            {barber.specialization}
                                        </p>

                                        <Badge
                                            bg={barber.isAvailable ? "success" : "secondary"}
                                            className="mb-3"
                                        >
                                            {barber.isAvailable
                                                ? "Available"
                                                : "Unavailable"}
                                        </Badge>

                                        <Button
                                            as={Link}
                                            to="/book-appointment"
                                            variant="warning"
                                            className="w-100"
                                        >
                                            Book Appointment
                                        </Button>

                                    </Card.Body>

                                </Card>

                            </Col>

                        ))

                    ) : (

                        <Col>

                            <div className="text-center py-5">

                                <h5>No barbers available.</h5>

                            </div>

                        </Col>

                    )}

                </Row>

                <div className="text-center mt-5">

                    <Button
                        as={Link}
                        to="/barbers"
                        variant="outline-dark"
                        size="lg"
                    >
                        View All Barbers
                    </Button>

                </div>

            </Container>

        </section>

    );

}

export default BarbersSection;