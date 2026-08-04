import { useEffect, useState } from "react";
import {
    Card,
    Table,
    Button,
    Spinner,
    Alert,
    Badge
} from "react-bootstrap";

import {
    FaEdit,
    FaTrash
} from "react-icons/fa";

import PaymentModal from "../../components/admin/payments/PaymentModal";

import {
    getAllPayments,
    updatePaymentStatus,
    deletePayment
} from "../../services/paymentService";

function ManagePayments() {

    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);

    useEffect(() => {
        loadPayments();
    }, []);

    const loadPayments = async () => {

        try {

            setLoading(true);

            const data = await getAllPayments();

            setPayments(data);

            setError("");

        }
        catch (err) {

            console.error(err);

            setError("Failed to load payments.");

        }
        finally {

            setLoading(false);

        }

    };

    const savePayment = async (data) => {

        try {

            await updatePaymentStatus(
                selectedPayment.paymentId,
                data
            );

            setShowModal(false);
            setSelectedPayment(null);

            await loadPayments();

        }
        catch (err) {

            console.error(err);

            alert(
                err.response?.data?.message ||
                "Failed to update payment."
            );

        }

    };

    const removePayment = async (id) => {

        if (!window.confirm("Delete this payment?"))
            return;

        try {

            await deletePayment(id);

            await loadPayments();

        }
        catch (err) {

            console.error(err);

            alert(
                err.response?.data?.message ||
                "Failed to delete payment."
            );

        }

    };

    const paymentBadge = (status) => {

        switch (status?.toLowerCase()) {

            case "pending":
                return <Badge bg="warning">Pending</Badge>;

            case "paid":
                return <Badge bg="success">Paid</Badge>;

            case "refunded":
                return <Badge bg="info">Refunded</Badge>;

            case "failed":
                return <Badge bg="danger">Failed</Badge>;

            default:
                return (
                    <Badge bg="secondary">
                        {status}
                    </Badge>
                );

        }

    };

    if (loading) {

        return (

            <div className="text-center mt-5">

                <Spinner
                    animation="border"
                    variant="warning"
                />

            </div>

        );

    }

    return (

        <div>

            <h2 className="mb-4">
                Manage Payments
            </h2>

            {error && (

                <Alert variant="danger">
                    {error}
                </Alert>

            )}

            <Card className="shadow-sm">

                <Card.Body>

                    <Table hover responsive>

                        <thead>

                            <tr>

                                <th>#</th>
                                <th>Customer</th>
                                <th>Barber</th>
                                <th>Service</th>
                                <th>Amount</th>
                                <th>Method</th>
                                <th>Status</th>
                                <th>Payment Date</th>
                                <th width="150">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {payments.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="9"
                                        className="text-center"
                                    >

                                        No payments found.

                                    </td>

                                </tr>

                            )}

                            {payments.map((payment, index) => (

                                <tr key={payment.paymentId}>

                                    <td>{index + 1}</td>

                                    <td>
                                        {payment.customerName}
                                    </td>

                                    <td>
                                        {payment.barberName}
                                    </td>

                                    <td>
                                        {payment.serviceName}
                                    </td>

                                    <td>
                                        ₱{Number(payment.amount).toFixed(2)}
                                    </td>

                                    <td>
                                        {payment.paymentMethod}
                                    </td>

                                    <td>
                                        {paymentBadge(
                                            payment.paymentStatus
                                        )}
                                    </td>

                                    <td>

                                        {new Date(
                                            payment.paymentDate
                                        ).toLocaleString()}

                                    </td>

                                    <td>

                                        <Button
                                            size="sm"
                                            variant="primary"
                                            className="me-2"
                                            disabled={
                                                payment.paymentStatus?.toLowerCase() === "paid"
                                            }
                                            onClick={() => {

                                                setSelectedPayment(payment);

                                                setShowModal(true);

                                            }}
                                        >

                                            <FaEdit />

                                        </Button>

                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() =>
                                                removePayment(
                                                    payment.paymentId
                                                )
                                            }
                                        >

                                            <FaTrash />

                                        </Button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </Table>

                </Card.Body>

            </Card>

            <PaymentModal
                show={showModal}
                handleClose={() => {

                    setShowModal(false);
                    setSelectedPayment(null);

                }}
                handleSave={savePayment}
                payment={selectedPayment}
            />

        </div>

    );

}

export default ManagePayments;