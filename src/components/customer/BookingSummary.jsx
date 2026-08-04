import { Card, Row, Col, Badge } from "react-bootstrap";

function BookingSummary({
    service,
    barber,
    date,
    time,
}) {

    const calculateFinishTime = () => {

        if (!time || !service) return "--";

        const [hour, minute] = time.split(":").map(Number);

        const finish = new Date();

        finish.setHours(hour);
        finish.setMinutes(minute + service.duration);

        return finish.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });

    };

    return (

        <Card className="shadow-sm border-0 mb-4">

            <Card.Body>

                <div className="d-flex justify-content-between align-items-center mb-3">

                    <h4 className="mb-0">
                        Booking Summary
                    </h4>

                    <Badge bg="warning" text="dark">
                        Preview
                    </Badge>

                </div>

                <hr />

                <Row className="mb-3">

                    <Col>

                        <small className="text-muted">
                            Service
                        </small>

                        <h5 className="fw-bold">
                            {service?.serviceName || "--"}
                        </h5>

                    </Col>

                </Row>

                <Row className="mb-3">

                    <Col md={6}>

                        <small className="text-muted">
                            Price
                        </small>

                        <h5 className="text-warning fw-bold">
                            {service
                                ? `₱${service.price}`
                                : "--"}
                        </h5>

                    </Col>

                    <Col md={6}>

                        <small className="text-muted">
                            Duration
                        </small>

                        <h6>
                            {service
                                ? `${service.duration} mins`
                                : "--"}
                        </h6>

                    </Col>

                </Row>

                <hr />

                <Row className="mb-3">

                    <Col>

                        <small className="text-muted">
                            Barber
                        </small>

                        <h6 className="fw-bold">
                            {barber?.fullName || "--"}
                        </h6>

                        <small className="text-secondary">
                            {barber?.specialization || ""}
                        </small>

                    </Col>

                </Row>

                <hr />

                <Row className="mb-3">

                    <Col md={6}>

                        <small className="text-muted">
                            Appointment Date
                        </small>

                        <h6>
                            {date || "--"}
                        </h6>

                    </Col>

                    <Col md={6}>

                        <small className="text-muted">
                            Appointment Time
                        </small>

                        <h6>
                            {time || "--"}
                        </h6>

                    </Col>

                </Row>

                <Row>

                    <Col md={6}>

                        <small className="text-muted">
                            Estimated Finish
                        </small>

                        <h6 className="text-success">
                            {calculateFinishTime()}
                        </h6>

                    </Col>

                    <Col md={6}>

                        <small className="text-muted">
                            Status
                        </small>

                        <h6 className="text-warning">
                            Pending Confirmation
                        </h6>

                    </Col>

                </Row>

            </Card.Body>

        </Card>

    );

}

export default BookingSummary;