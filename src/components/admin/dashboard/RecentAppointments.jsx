import { Card, Table, Badge } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

function RecentAppointments({ appointments }) {

    const getStatusBadge = (status) => {

        switch (status) {

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
                        {status}
                    </Badge>
                );

            case "Confirmed":
                return (
                    <Badge
                        bg=""
                        style={{
                            background: "#DBEAFE",
                            color: "#1D4ED8",
                            padding: "8px 14px",
                            borderRadius: "20px",
                            fontWeight: "600"
                        }}
                    >
                        {status}
                    </Badge>
                );

            case "Completed":
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
                        {status}
                    </Badge>
                );

            case "Cancelled":
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
                        {status}
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
            className="border-0 shadow-sm mt-4"
            style={{
                borderRadius: "18px"
            }}
        >

            <Card.Header
                className="bg-white border-0 py-3 px-4 d-flex align-items-center"
            >

                <FaCalendarAlt
                    className="me-2"
                    color="#2563EB"
                />

                <h5 className="mb-0 fw-bold">

                    Recent Appointments

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

                            <th className="ps-4">#</th>

                            <th>Customer</th>

                            <th>Barber</th>

                            <th>Service</th>

                            <th>Date</th>

                            <th className="pe-4">Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {appointments.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="text-center py-5 text-muted"
                                >

                                    No recent appointments found.

                                </td>

                            </tr>

                        ) : (

                            appointments.map((appointment, index) => (

                                <tr key={appointment.appointmentId}>

                                    <td className="ps-4 fw-semibold">

                                        {index + 1}

                                    </td>

                                    <td>

                                        {appointment.customerName}

                                    </td>

                                    <td>

                                        {appointment.barberName}

                                    </td>

                                    <td>

                                        {appointment.serviceName}

                                    </td>

                                    <td>

                                        {new Date(
                                            appointment.appointmentDate
                                        ).toLocaleDateString()}

                                    </td>

                                    <td className="pe-4">

                                        {getStatusBadge(
                                            appointment.status
                                        )}

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

export default RecentAppointments;