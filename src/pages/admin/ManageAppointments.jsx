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
    FaTrash,
    FaCheck,
    FaCheckDouble
} from "react-icons/fa";

import AppointmentModal from "../../components/admin/appointments/AppointmentModal";

import {
    getAllAppointments,
    updateAppointment,
    deleteAppointment,
    confirmAppointment,
    completeAppointment
} from "../../services/appointmentService";

function ManageAppointments() {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [processingId, setProcessingId] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    useEffect(() => {
        loadAppointments();
    }, []);

    const loadAppointments = async () => {

        try {

            setLoading(true);

            const data = await getAllAppointments();

            setAppointments(data);

        }
        catch (err) {

            console.error(err);
            setError("Failed to load appointments.");

        }
        finally {

            setLoading(false);

        }

    };

    const saveAppointment = async (data) => {

        try {

            await updateAppointment(
                selectedAppointment.appointmentId,
                data
            );

            setShowModal(false);
            setSelectedAppointment(null);

            loadAppointments();

        }
        catch (err) {

            console.error(err);
            alert("Failed to update appointment.");

        }

    };

    const removeAppointment = async (id) => {

        if (!window.confirm("Delete this appointment?"))
            return;

        try {

            setProcessingId(id);

            await deleteAppointment(id);

            loadAppointments();

        }
        catch {

            alert("Failed to delete appointment.");

        }
        finally {

            setProcessingId(null);

        }

    };

    const confirm = async (id) => {

        try {

            setProcessingId(id);

            await confirmAppointment(id);

            loadAppointments();

        }
        catch {

            alert("Unable to confirm appointment.");

        }
        finally {

            setProcessingId(null);

        }

    };

    const complete = async (id) => {

        try {

            setProcessingId(id);

            await completeAppointment(id);

            loadAppointments();

        }
        catch {

            alert("Unable to complete appointment.");

        }
        finally {

            setProcessingId(null);

        }

    };

    const statusBadge = (status) => {

        switch (status) {

            case "Pending":
                return <Badge bg="warning">Pending</Badge>;

            case "Confirmed":
                return <Badge bg="info">Confirmed</Badge>;

            case "Completed":
                return <Badge bg="success">Completed</Badge>;

            case "Cancelled":
                return <Badge bg="danger">Cancelled</Badge>;

            default:
                return <Badge bg="secondary">{status}</Badge>;

        }

    };

    if (loading) {

        return (

            <div className="text-center mt-5">

                <Spinner animation="border" variant="warning"/>

            </div>

        );

    }

    return (

        <div>

            <h2 className="mb-4 fw-bold">

                Manage Appointments

            </h2>

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
                                <th>Customer</th>
                                <th>Barber</th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Duration</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th width="260">Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {appointments.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="10"
                                        className="text-center"
                                    >

                                        No appointments found.

                                    </td>

                                </tr>

                            )}

                            {appointments.map((appointment, index) => (

                                <tr key={appointment.appointmentId}>

                                    <td>{index + 1}</td>

                                    <td>{appointment.customerName}</td>

                                    <td>{appointment.barberName}</td>

                                    <td>{appointment.serviceName}</td>

                                    <td>₱{appointment.servicePrice}</td>

                                    <td>{appointment.duration} mins</td>

                                    <td>

                                        {new Date(
                                            appointment.appointmentDate
                                        ).toLocaleDateString()}

                                    </td>

                                    <td>

                                        {new Date(
                                            `1970-01-01T${appointment.appointmentTime}`
                                        ).toLocaleTimeString([], {
                                            hour: "numeric",
                                            minute: "2-digit"
                                        })}

                                    </td>

                                    <td>

                                        {statusBadge(
                                            appointment.status
                                        )}

                                    </td>

                                    <td>

                                        {appointment.status === "Pending" && (

                                            <Button
                                                size="sm"
                                                variant="warning"
                                                className="me-2"
                                                disabled={processingId === appointment.appointmentId}
                                                onClick={() =>
                                                    confirm(appointment.appointmentId)
                                                }
                                            >

                                                <FaCheck />

                                            </Button>

                                        )}

                                        {appointment.status === "Confirmed" && (

                                            <Button
                                                size="sm"
                                                variant="success"
                                                className="me-2"
                                                disabled={processingId === appointment.appointmentId}
                                                onClick={() =>
                                                    complete(appointment.appointmentId)
                                                }
                                            >

                                                <FaCheckDouble />

                                            </Button>

                                        )}

                                        {appointment.status !== "Completed" &&
                                         appointment.status !== "Cancelled" && (

                                            <Button
                                                size="sm"
                                                variant="primary"
                                                className="me-2"
                                                disabled={processingId === appointment.appointmentId}
                                                onClick={() => {

                                                    setSelectedAppointment(appointment);

                                                    setShowModal(true);

                                                }}
                                            >

                                                <FaEdit />

                                            </Button>

                                        )}

                                        {appointment.status !== "Completed" && (

                                            <Button
                                                size="sm"
                                                variant="danger"
                                                disabled={processingId === appointment.appointmentId}
                                                onClick={() =>
                                                    removeAppointment(
                                                        appointment.appointmentId
                                                    )
                                                }
                                            >

                                                <FaTrash />

                                            </Button>

                                        )}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </Table>

                </Card.Body>

            </Card>

            <AppointmentModal
                show={showModal}
                handleClose={() => {

                    setShowModal(false);
                    setSelectedAppointment(null);

                }}
                handleSave={saveAppointment}
                appointment={selectedAppointment}
            />

        </div>

    );

}

export default ManageAppointments;