import {
    Card,
    Row,
    Col
} from "react-bootstrap";

function RevenueCards({ revenue }) {

    if (!revenue) return null;

    return (

        <Row>

            <Col lg={3} md={6} className="mb-4">

                <Card className="shadow-sm border-0">

                    <Card.Body>

                        <h6 className="text-muted">
                            Today's Revenue
                        </h6>

                        <h3 className="fw-bold text-success">
                            ₱ {revenue.todayRevenue.toLocaleString()}
                        </h3>

                    </Card.Body>

                </Card>

            </Col>

            <Col lg={3} md={6} className="mb-4">

                <Card className="shadow-sm border-0">

                    <Card.Body>

                        <h6 className="text-muted">
                            This Week
                        </h6>

                        <h3 className="fw-bold text-primary">
                            ₱ {revenue.thisWeekRevenue.toLocaleString()}
                        </h3>

                    </Card.Body>

                </Card>

            </Col>

            <Col lg={3} md={6} className="mb-4">

                <Card className="shadow-sm border-0">

                    <Card.Body>

                        <h6 className="text-muted">
                            This Month
                        </h6>

                        <h3 className="fw-bold text-warning">
                            ₱ {revenue.thisMonthRevenue.toLocaleString()}
                        </h3>

                    </Card.Body>

                </Card>

            </Col>

            <Col lg={3} md={6} className="mb-4">

                <Card className="shadow-sm border-0">

                    <Card.Body>

                        <h6 className="text-muted">
                            This Year
                        </h6>

                        <h3 className="fw-bold text-danger">
                            ₱ {revenue.thisYearRevenue.toLocaleString()}
                        </h3>

                    </Card.Body>

                </Card>

            </Col>

        </Row>

    );

}

export default RevenueCards;