import { useEffect, useState } from "react";
import {
    Card,
    Table,
    Button,
    Spinner,
    Alert,
    Badge,
    Form,
    InputGroup
} from "react-bootstrap";

import {
    FaEdit,
    FaTrash,
    FaCheck,
    FaCheckDouble,
    FaSearch
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

    // Search and filter
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

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

    // Search and status filtering
    const filteredAppointments = appointments.filter((appointment) => {

        const search = searchTerm.toLowerCase().trim();

        const matchesSearch =
            appointment.customerName?.toLowerCase().includes(search) ||
            appointment.barberName?.toLowerCase().includes(search) ||
            appointment.serviceName?.toLowerCase().includes(search);

        const matchesStatus =
            statusFilter === "All" ||
            appointment.status === statusFilter;

        return matchesSearch && matchesStatus;

    });

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

                    {/* Search and Filter */}
                    <div className="mb-4">

                        <div className="row g-3">

                            {/* Search */}
                            <div className="col-md-8">

                                <Form.Label className="fw-semibold">
                                    Search Appointments
                                </Form.Label>

                                <InputGroup>

                                    <InputGroup.Text>
                                        <FaSearch />
                                    </InputGroup.Text>

                                    <Form.Control
                                        type="text"
                                        placeholder="Search customer, barber, or service..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                    />

                                </InputGroup>

                            </div>

                            {/* Status Filter */}
                            <div className="col-md-4">

                                <Form.Label className="fw-semibold">
                                    Filter by Status
                                </Form.Label>

                                <Form.Select
                                    value={statusFilter}
                                    onChange={(e) =>
                                        setStatusFilter(e.target.value)
                                    }
                                >

                                    <option value="All">
                                        All Status
                                    </option>

                                    <option value="Pending">
                                        Pending
                                    </option>

                                    <option value="Confirmed">
                                        Confirmed
                                    </option>

                                    <option value="Completed">
                                        Completed
                                    </option>

                                    <option value="Cancelled">
                                        Cancelled
                                    </option>

                                </Form.Select>

                            </div>

                        </div>

                    </div>

                    {/* Appointment Count */}
                    <div className="mb-3 text-muted">

                        Showing{" "}
                        <strong>
                            {filteredAppointments.length}
                        </strong>{" "}
                        of{" "}
                        <strong>
                            {appointments.length}
                        </strong>{" "}
                        appointments

                    </div>

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

                            {filteredAppointments.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="10"
                                        className="text-center py-4"
                                    >

                                        No appointments match your search.

                                    </td>

                                </tr>

                            )}

                            {filteredAppointments.map(
                                (appointment, index) => (

                                    <tr
                                        key={appointment.appointmentId}
                                    >

                                        <td>
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
                                            ₱{appointment.servicePrice}
                                        </td>

                                        <td>
                                            {appointment.duration} mins
                                        </td>

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

                                            {/* Confirm */}
                                            {appointment.status === "Pending" && (

                                                <Button
                                                    size="sm"
                                                    variant="warning"
                                                    className="me-2"
                                                    disabled={
                                                        processingId ===
                                                        appointment.appointmentId
                                                    }
                                                    onClick={() =>
                                                        confirm(
                                                            appointment.appointmentId
                                                        )
                                                    }
                                                >

                                                    <FaCheck />

                                                </Button>

                                            )}

                                            {/* Complete */}
                                            {appointment.status === "Confirmed" && (

                                                <Button
                                                    size="sm"
                                                    variant="success"
                                                    className="me-2"
                                                    disabled={
                                                        processingId ===
                                                        appointment.appointmentId
                                                    }
                                                    onClick={() =>
                                                        complete(
                                                            appointment.appointmentId
                                                        )
                                                    }
                                                >

                                                    <FaCheckDouble />

                                                </Button>

                                            )}

                                            {/* Edit */}
                                            {appointment.status !== "Completed" &&
                                                appointment.status !== "Cancelled" && (

                                                    <Button
                                                        size="sm"
                                                        variant="primary"
                                                        className="me-2"
                                                        disabled={
                                                            processingId ===
                                                            appointment.appointmentId
                                                        }
                                                        onClick={() => {

                                                            setSelectedAppointment(
                                                                appointment
                                                            );

                                                            setShowModal(true);

                                                        }}
                                                    >

                                                        <FaEdit />

                                                    </Button>

                                                )}

                                            {/* Delete */}
                                            {appointment.status !== "Completed" && (

                                                <Button
                                                    size="sm"
                                                    variant="danger"
                                                    disabled={
                                                        processingId ===
                                                        appointment.appointmentId
                                                    }
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

                                )
                            )}

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