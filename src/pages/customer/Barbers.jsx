import { Card, Col, Container, Row } from "react-bootstrap";

function Barbers() {
    return (
        <Container>

            <h2 className="page-title">
                Our Barbers
            </h2>

            <Row className="g-4">

                <Col md={4}>
                    <Card>

                        <Card.Body>

                            <h5>John Doe</h5>

                            <p>
                                Hair Styling
                            </p>

                            <span className="badge bg-success">
                                Available
                            </span>

                        </Card.Body>

                    </Card>
                </Col>

            </Row>

        </Container>
    );
}

export default Barbers;