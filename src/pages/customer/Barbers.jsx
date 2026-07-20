import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
    Spinner,
    Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { getBarbers } from "../../services/barberService";

import barber1 from "../../assets/images/barber1.png";
import barber2 from "../../assets/images/barber2.png";
import barber3 from "../../assets/images/barber3.png";

function Barbers() {

    const [barbers, setBarbers] = useState([]);
    const [filteredBarbers, setFilteredBarbers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBarbers();
    }, []);

    const loadBarbers = async () => {
        try {
            const data = await getBarbers();

            setBarbers(data);
            setFilteredBarbers(data);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        const filtered = barbers.filter((barber) =>
            barber.fullName.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredBarbers(filtered);

    }, [search, barbers]);

    const getImage = (index) => {

        if (index % 3 === 0) return barber1;
        if (index % 3 === 1) return barber2;

        return barber3;
    };

    if (loading) {
        return (
            <div className="text-center py-5">
                <Spinner animation="border" variant="warning" />
            </div>
        );
    }

    return (
        <section className="barbers-page">

            <div className="barbers-hero">

                <Container>

                    <h1>Meet Our Professional Barbers</h1>

                    <p>
                        Skilled professionals dedicated to giving you the perfect look.
                    </p>

                </Container>

            </div>

            <Container className="py-5">

                <Row className="justify-content-center mb-5">

                    <Col lg={6}>

                        <Form.Control
                            type="text"
                            placeholder="Search barber..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="barber-search"
                        />

                    </Col>

                </Row>

                <Row className="g-4">

                    {filteredBarbers.map((barber, index) => (

                        <Col
                            lg={4}
                            md={6}
                            key={barber.barberId}
                        >

                            <Card className="barber-card h-100">

                                <Card.Img
                                    variant="top"
                                    src={getImage(index)}
                                    className="barber-image"
                                />

                                <Card.Body>

                                    <h4>{barber.fullName}</h4>

                                    <p className="specialization">
                                        {barber.specialization}
                                    </p>

                                    <Badge
                                        bg={barber.isAvailable ? "success" : "secondary"}
                                        className="availability-badge"
                                    >
                                        {barber.isAvailable ? "Available" : "Unavailable"}
                                    </Badge>

                                    <Button
                                        as={Link}
                                        to="/book-appointment"
                                        variant="warning"
                                        className="w-100 mt-4"
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

export default Barbers;