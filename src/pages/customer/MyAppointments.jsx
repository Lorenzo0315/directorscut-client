import { useEffect, useState } from "react";
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

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAppointments();
    }, []);

    const loadAppointments = async () => {

        try {

            const data = await getMyAppointments();
            setAppointments(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    const handleCancel = async (appointmentId) => {

        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this appointment?"
        );

        if (!confirmCancel) return;

        try {

            await cancelAppointment(appointmentId);

            loadAppointments();

            alert("Appointment cancelled successfully.");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Unable to cancel appointment."
            );

        }

    };

    const getBadge = (status) => {

        switch (status.toLowerCase()) {

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

        <section className="my-appointments">

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

                {appointments.length === 0 && (

                    <Alert variant="info" className="text-center">
                        You don't have any appointments yet.
                    </Alert>

                )}

                <Row className="g-4">

                    {appointments.map((appointment) => (

                        <Col
                            lg={6}
                            key={appointment.appointmentId}
                        >

                            <Card className="appointment-card">

                                <Card.Body>

                                    <div className="d-flex justify-content-between">

                                        <div>

                                            <h4>
                                                {appointment.serviceName}
                                            </h4>

                                            <p className="mb-1">
                                                <strong>Barber:</strong>{" "}
                                                {appointment.barberName}
                                            </p>

                                            <p className="mb-1">
                                                <strong>Date:</strong>{" "}
                                                {new Date(
                                                    appointment.appointmentDate
                                                ).toLocaleDateString()}
                                            </p>

                                            <p>
                                                <strong>Time:</strong>{" "}
                                                {appointment.appointmentTime}
                                            </p>

                                        </div>

                                        <Badge
                                            bg={getBadge(
                                                appointment.status
                                            )}
                                            className="status-badge"
                                        >
                                            {appointment.status}
                                        </Badge>

                                    </div>

                                    {appointment.status.toLowerCase() ===
                                        "pending" && (

                                        <Button
                                            variant="danger"
                                            className="mt-4"
                                            onClick={() =>
                                                handleCancel(
                                                    appointment.appointmentId
                                                )
                                            }
                                        >
                                            Cancel Appointment
                                        </Button>

                                    )}

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