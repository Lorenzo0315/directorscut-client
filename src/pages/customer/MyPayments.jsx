import { useEffect, useState } from "react";
import {
    Container,
    Card,
    Table,
    Spinner,
    Alert,
    Badge
} from "react-bootstrap";

import { getMyPayments } from "../../services/paymentService";

function MyPayments() {

    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadPayments();
    }, []);

    const loadPayments = async () => {

        try {

            const data = await getMyPayments();

            setPayments(data);

        }
        catch (err) {

            console.error(err);

            setError("Failed to load payment history.");

        }
        finally {

            setLoading(false);

        }

    };

    const getStatusBadge = (status) => {

        switch (status) {

            case "Paid":
                return <Badge bg="success">Paid</Badge>;

            case "Pending":
                return <Badge bg="warning">Pending</Badge>;

            case "Failed":
                return <Badge bg="danger">Failed</Badge>;

            default:
                return <Badge bg="secondary">{status}</Badge>;

        }

    };

    if (loading) {

        return (
            <div className="text-center py-5">
                <Spinner animation="border" variant="warning" />
            </div>
        );

    }

    return (

        <section className="py-5">

            <Container>

                <div className="text-center mb-5">

                    <h2 className="fw-bold">
                        Payment History
                    </h2>

                    <p className="text-muted">
                        View all your completed payments.
                    </p>

                </div>

                {error &&
                    <Alert variant="danger">
                        {error}
                    </Alert>
                }

                <Card className="shadow-sm">

                    <Card.Body>

                        <Table hover responsive>

                            <thead>

                                <tr>

                                    <th>#</th>
                                    <th>Service</th>
                                    <th>Barber</th>
                                    <th>Amount</th>
                                    <th>Method</th>
                                    <th>Status</th>
                                    <th>Payment Date</th>

                                </tr>

                            </thead>

                            <tbody>

                                {payments.length === 0 && (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            className="text-center"
                                        >

                                            No payment history found.

                                        </td>

                                    </tr>

                                )}

                                {payments.map((payment, index) => (

                                    <tr key={payment.paymentId}>

                                        <td>{index + 1}</td>

                                        <td>
                                            {payment.serviceName}
                                        </td>

                                        <td>
                                            {payment.barberName}
                                        </td>

                                        <td>
                                            ₱{payment.amount}
                                        </td>

                                        <td>
                                            {payment.paymentMethod}
                                        </td>

                                        <td>
                                            {getStatusBadge(payment.paymentStatus)}
                                        </td>

                                        <td>

                                            {new Date(
                                                payment.paymentDate
                                            ).toLocaleString()}

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </Table>

                    </Card.Body>

                </Card>

            </Container>

        </section>

    );

}

export default MyPayments;