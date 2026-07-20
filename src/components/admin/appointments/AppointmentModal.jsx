import { useEffect, useState } from "react";
import {
    Modal,
    Form,
    Button,
    Row,
    Col
} from "react-bootstrap";

import { getBarbers } from "../../../services/barberService";
import { getAllServices } from "../../../services/serviceService";

function AppointmentModal({
    show,
    handleClose,
    handleSave,
    appointment
}) {

    const [barbers, setBarbers] = useState([]);
    const [services, setServices] = useState([]);

    const [formData, setFormData] = useState({
        barberId: "",
        serviceId: "",
        appointmentDate: "",
        appointmentTime: "",
        status: "Pending"
    });

    useEffect(() => {
        if (show) {
            loadDropdowns();
        }
    }, [show]);

    useEffect(() => {
        if (appointment) {
            setFormData({
                barberId: String(appointment.barberId),
                serviceId: String(appointment.serviceId),
                appointmentDate:
                    appointment.appointmentDate?.split("T")[0] || "",
                appointmentTime:
                    appointment.appointmentTime?.substring(0, 5) || "",
                status: appointment.status
            });
        }
    }, [appointment]);

    const loadDropdowns = async () => {
        try {

            const barberData = await getBarbers();
            const serviceData = await getAllServices();

            setBarbers(barberData);
            setServices(serviceData);

        } catch (err) {
            console.error("Failed to load dropdown data:", err);
        }
    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const submit = (e) => {

        e.preventDefault();

        handleSave({
            ...formData,
            barberId: Number(formData.barberId),
            serviceId: Number(formData.serviceId)
        });

    };

    return (

        <Modal
            show={show}
            onHide={handleClose}
            centered
            size="lg"
        >

            <Form onSubmit={submit}>

                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Appointment
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Row>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Barber
                                </Form.Label>

                                <Form.Select
                                    name="barberId"
                                    value={formData.barberId}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select Barber
                                    </option>

                                    {barbers.map((barber) => (

                                        <option
                                            key={barber.barberId}
                                            value={String(barber.barberId)}
                                        >
                                            {barber.fullName}
                                        </option>

                                    ))}

                                </Form.Select>

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Service
                                </Form.Label>

                                <Form.Select
                                    name="serviceId"
                                    value={formData.serviceId}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select Service
                                    </option>

                                    {services.map((service) => (

                                        <option
                                            key={service.serviceId}
                                            value={String(service.serviceId)}
                                        >
                                            {service.serviceName}
                                        </option>

                                    ))}

                                </Form.Select>

                            </Form.Group>

                        </Col>

                    </Row>

                    <Row>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Appointment Date
                                </Form.Label>

                                <Form.Control
                                    type="date"
                                    name="appointmentDate"
                                    value={formData.appointmentDate}
                                    onChange={handleChange}
                                    required
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>
                                    Appointment Time
                                </Form.Label>

                                <Form.Control
                                    type="time"
                                    name="appointmentTime"
                                    value={formData.appointmentTime}
                                    onChange={handleChange}
                                    required
                                />

                            </Form.Group>

                        </Col>

                    </Row>

                    <Form.Group>

                        <Form.Label>
                            Status
                        </Form.Label>

                        <Form.Select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >

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

                    </Form.Group>

                </Modal.Body>

                <Modal.Footer>

                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="warning"
                        type="submit"
                    >
                        Save Changes
                    </Button>

                </Modal.Footer>

            </Form>

        </Modal>

    );

}

export default AppointmentModal;