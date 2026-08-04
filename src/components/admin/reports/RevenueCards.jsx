import {
    Card,
    Row,
    Col
} from "react-bootstrap";

function RevenueCards({ revenue }) {

    if (!revenue) return null;

    const summary = revenue.revenueSummary ?? {};

    return (

        <Row>

            <Col lg={2} md={4} sm={6} className="mb-4">

                <Card className="shadow-sm border-0 h-100">

                    <Card.Body>

                        <h6 className="text-muted">
                            Today
                        </h6>

                        <h4 className="fw-bold text-success">
                            ₱ {(summary.todayRevenue ?? 0).toLocaleString()}
                        </h4>

                    </Card.Body>

                </Card>

            </Col>

            <Col lg={2} md={4} sm={6} className="mb-4">

                <Card className="shadow-sm border-0 h-100">

                    <Card.Body>

                        <h6 className="text-muted">
                            This Week
                        </h6>

                        <h4 className="fw-bold text-primary">
                            ₱ {(summary.thisWeekRevenue ?? 0).toLocaleString()}
                        </h4>

                    </Card.Body>

                </Card>

            </Col>

            <Col lg={2} md={4} sm={6} className="mb-4">

                <Card className="shadow-sm border-0 h-100">

                    <Card.Body>

                        <h6 className="text-muted">
                            This Month
                        </h6>

                        <h4 className="fw-bold text-warning">
                            ₱ {(summary.thisMonthRevenue ?? 0).toLocaleString()}
                        </h4>

                    </Card.Body>

                </Card>

            </Col>

            <Col lg={2} md={4} sm={6} className="mb-4">

                <Card className="shadow-sm border-0 h-100">

                    <Card.Body>

                        <h6 className="text-muted">
                            This Year
                        </h6>

                        <h4 className="fw-bold text-danger">
                            ₱ {(summary.thisYearRevenue ?? 0).toLocaleString()}
                        </h4>

                    </Card.Body>

                </Card>

            </Col>

            <Col lg={2} md={4} sm={6} className="mb-4">

                <Card className="shadow-sm border-0 h-100">

                    <Card.Body>

                        <h6 className="text-muted">
                            Total Revenue
                        </h6>

                        <h4 className="fw-bold text-dark">
                            ₱ {(summary.totalRevenue ?? 0).toLocaleString()}
                        </h4>

                    </Card.Body>

                </Card>

            </Col>

            <Col lg={2} md={4} sm={6} className="mb-4">

                <Card className="shadow-sm border-0 h-100">

                    <Card.Body>

                        <h6 className="text-muted">
                            Total Appointments
                        </h6>

                        <h4 className="fw-bold text-info">
                            {(revenue.totalAppointments ?? 0).toLocaleString()}
                        </h4>

                    </Card.Body>

                </Card>

            </Col>

            <Col lg={2} md={4} sm={6} className="mb-4">

                <Card className="shadow-sm border-0 h-100">

                    <Card.Body>

                        <h6 className="text-muted">
                            Total Customers
                        </h6>

                        <h4 className="fw-bold text-secondary">
                            {(revenue.totalCustomers ?? 0).toLocaleString()}
                        </h4>

                    </Card.Body>

                </Card>

            </Col>

        </Row>

    );

}

export default RevenueCards;