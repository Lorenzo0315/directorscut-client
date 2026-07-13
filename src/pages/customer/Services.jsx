import { Card, Col, Container, Row } from "react-bootstrap";

function Services() {
    return (
        <Container>

            <h2 className="page-title">
                Services
            </h2>

            <Row className="g-4">

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <h5>Haircut</h5>
                            <p>₱200</p>
                            <p>30 Minutes</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <h5>Beard Trim</h5>
                            <p>₱150</p>
                            <p>20 Minutes</p>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    );
}

export default Services;