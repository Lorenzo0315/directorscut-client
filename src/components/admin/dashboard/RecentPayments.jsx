import {
    Card,
    Table,
    Badge
} from "react-bootstrap";

import { FaMoneyBillWave } from "react-icons/fa";

function RecentPayments({ payments }) {

    const statusBadge = (status) => {

        switch (status) {

            case "Paid":
                return (
                    <Badge
                        bg=""
                        style={{
                            background: "#DCFCE7",
                            color: "#166534",
                            padding: "8px 14px",
                            borderRadius: "20px",
                            fontWeight: "600"
                        }}
                    >
                        Paid
                    </Badge>
                );

            case "Pending":
                return (
                    <Badge
                        bg=""
                        style={{
                            background: "#FEF3C7",
                            color: "#B45309",
                            padding: "8px 14px",
                            borderRadius: "20px",
                            fontWeight: "600"
                        }}
                    >
                        Pending
                    </Badge>
                );

            case "Failed":
                return (
                    <Badge
                        bg=""
                        style={{
                            background: "#FEE2E2",
                            color: "#991B1B",
                            padding: "8px 14px",
                            borderRadius: "20px",
                            fontWeight: "600"
                        }}
                    >
                        Failed
                    </Badge>
                );

            case "Refunded":
                return (
                    <Badge
                        bg=""
                        style={{
                            background: "#E5E7EB",
                            color: "#374151",
                            padding: "8px 14px",
                            borderRadius: "20px",
                            fontWeight: "600"
                        }}
                    >
                        Refunded
                    </Badge>
                );

            default:
                return (
                    <Badge bg="secondary">
                        {status}
                    </Badge>
                );

        }

    };

    return (

        <Card
            className="border-0 shadow-sm h-100"
            style={{
                borderRadius: "18px"
            }}
        >

            <Card.Header
                className="bg-white border-0 py-3 px-4 d-flex align-items-center"
            >

                <FaMoneyBillWave
                    className="me-2"
                    color="#16A34A"
                />

                <h5 className="mb-0 fw-bold">

                    Recent Payments

                </h5>

            </Card.Header>

            <Card.Body className="p-0">

                <Table
                    hover
                    responsive
                    className="align-middle mb-0"
                >

                    <thead
                        style={{
                            background: "#F8FAFC"
                        }}
                    >

                        <tr>

                            <th className="ps-4">
                                Customer
                            </th>

                            <th>
                                Amount
                            </th>

                            <th className="pe-4">
                                Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {payments.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="3"
                                    className="text-center py-5 text-muted"
                                >

                                    No payments found.

                                </td>

                            </tr>

                        ) : (

                            payments.map(payment => (

                                <tr key={payment.paymentId}>

                                    <td className="ps-4 fw-semibold">

                                        {payment.customerName}

                                    </td>

                                    <td>

                                        ₱ {Number(payment.amount).toLocaleString(
                                            undefined,
                                            {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            }
                                        )}

                                    </td>

                                    <td className="pe-4">

                                        {statusBadge(payment.paymentStatus)}

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default RecentPayments;