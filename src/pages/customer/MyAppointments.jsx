import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,
    Badge,
    Button,
    Spinner,
    Alert
} from "react-bootstrap";

import {
    getMyAppointments,
    cancelAppointment
} from "../../services/appointmentService";

function MyAppointments() {

    const navigate = useNavigate();

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [cancellingId, setCancellingId] = useState(null);

    useEffect(() => {
        loadAppointments();
    }, []);

    const loadAppointments = async () => {

        try {

            setLoading(true);

            const data = await getMyAppointments();

            setAppointments(data);

            setError("");

        }
        catch (err) {

            console.error(err);

            setError("Failed to load appointments.");

        }
        finally {

            setLoading(false);

        }

    };

    const handleCancel = async (appointmentId) => {

        if (!window.confirm("Cancel this appointment?")) return;

        try {

            setCancellingId(appointmentId);

            await cancelAppointment(appointmentId);

            setSuccess("Appointment cancelled successfully.");
            setError("");

            await loadAppointments();

        }
        catch (err) {

            console.error(err);

            setError(
                err.response?.data?.message ??
                "Unable to cancel appointment."
            );

        }
        finally {

            setCancellingId(null);

        }

    };

    const getBadge = (status) => {

        switch (status?.toLowerCase()) {

            case "pending":
                return "warning";

            case "confirmed":
                return "success";

            case "completed":
                return "primary";

            case "cancelled":
                return "secondary";

            default:
                return "dark";

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

        <section className="my-appointments py-5">

            <Container>

                <div className="text-center mb-5">

                    <span className="section-badge">
                        MY BOOKINGS
                    </span>

                    <h2 className="section-title">
                        My Appointments
                    </h2>

                    <p className="section-subtitle">
                        View and manage your upcoming appointments.
                    </p>

                </div>

                {success && (
                    <Alert variant="success">
                        {success}
                    </Alert>
                )}

                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}

                {!appointments.length && (
                    <Alert variant="info" className="text-center">
                        You don't have any appointments yet.
                    </Alert>
                )}

                <Row className="g-4">

                    {appointments.map((appointment) => (

                        <Col md={6} key={appointment.appointmentId}>

                            <Card className="shadow-sm border-0 h-100">

                                <Card.Body>

                                    <div className="d-flex justify-content-between">

                                        <div>

                                            <h4 className="fw-bold mb-3">
                                                {appointment.serviceName}
                                            </h4>

                                            <p>
                                                <strong>Barber:</strong>{" "}
                                                {appointment.barberName}
                                            </p>

                                            <p>
                                                <strong>Price:</strong>{" "}
                                                ₱{appointment.servicePrice}
                                            </p>

                                            <p>
                                                <strong>Duration:</strong>{" "}
                                                {appointment.duration} mins
                                            </p>

                                            <p>
                                                <strong>Date:</strong>{" "}
                                                {new Date(
                                                    appointment.appointmentDate
                                                ).toLocaleDateString()}
                                            </p>

                                            <p>
                                                <strong>Time:</strong>{" "}
                                                {appointment.appointmentTime}
                                            </p>

                                            {appointment.estimatedFinish && (

                                                <p>

                                                    <strong>Estimated Finish:</strong>{" "}
                                                    {appointment.estimatedFinish}

                                                </p>

                                            )}

                                            <p>

                                                <strong>Booked:</strong>{" "}
                                                {new Date(
                                                    appointment.createdAt
                                                ).toLocaleString()}

                                            </p>

                                        </div>

                                        <div className="text-end">

                                            <Badge
                                                bg={getBadge(appointment.status)}
                                                className="px-3 py-2"
                                            >
                                                {appointment.status}
                                            </Badge>

                                            {appointment.paymentStatus === "Paid" && (
                                                <>
                                                    <br />
                                                    <Badge
                                                        bg="success"
                                                        className="mt-2 px-3 py-2"
                                                    >
                                                        Paid
                                                    </Badge>
                                                </>
                                            )}

                                        </div>

                                    </div>

                                    <div className="mt-4 d-flex gap-2">

                                        {/* Pay Now */}
                                        {appointment.status === "Confirmed" &&
                                            appointment.paymentStatus !== "Paid" && (

                                             <Button
                                                variant="success"
                                                onClick={() =>
                                                    navigate(
                                                        `/payments/${appointment.appointmentId}`,
                                                        {
                                                            state: {
                                                                appointment
                                                            }
                                                        }
                                                    )
                                                }
                                            >
                                                Pay Now
                                            </Button>

                                        )}

                                        {/* Cancel */}

                                        {(appointment.status === "Pending" ||
                                            appointment.status === "Confirmed") && (

                                                <Button
                                                    variant="danger"
                                                    disabled={
                                                        cancellingId ===
                                                        appointment.appointmentId
                                                    }
                                                    onClick={() =>
                                                        handleCancel(
                                                            appointment.appointmentId
                                                        )
                                                    }
                                                >

                                                    {cancellingId ===
                                                        appointment.appointmentId
                                                        ? "Cancelling..."
                                                        : "Cancel Appointment"}

                                                </Button>

                                            )}

                                    </div>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                </Row>

            </Container>

        </section>

    );

}

export default MyAppointments;