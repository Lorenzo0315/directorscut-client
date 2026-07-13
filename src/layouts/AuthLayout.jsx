import { Container, Row, Col, Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <Container
            fluid
            className="vh-100 d-flex align-items-center justify-content-center bg-light"
        >
            <Row className="w-100 justify-content-center">
                <Col xs={11} sm={8} md={6} lg={4}>
                    <Card className="shadow-lg border-0 rounded-4">
                        <Card.Body className="p-4">

                            <div className="text-center mb-4">
                                <h2 className="fw-bold">
                                    Director's Cut
                                </h2>

                                <p className="text-muted">
                                    Barber Shop Management System
                                </p>
                            </div>

                            <Outlet />

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AuthLayout;