import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

import { getBarbers } from "../../services/barberService";

import barber1 from "../../assets/images/barber1.png";
import barber2 from "../../assets/images/barber2.png";
import barber3 from "../../assets/images/barber3.png";

function BarbersSection() {

    const [barbers, setBarbers] = useState([]);

    useEffect(() => {
        loadBarbers();
    }, []);

    const loadBarbers = async () => {
        try {
            const data = await getBarbers();
            setBarbers(data);
        } catch (error) {
            console.error("Failed to load barbers:", error);
        }
    };

    const barberImages = [
        barber1,
        barber2,
        barber3
    ];

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

                    {barbers.map((barber, index) => (

                        <Col
                            lg={4}
                            md={6}
                            key={barber.barberId}
                        >

                            <Card className="barber-card h-100">

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
                                        variant="warning"
                                        className="w-100"
                                    >
                                        Book Appointment
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