import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
    Alert,
    Spinner,
} from "react-bootstrap";

import { getAllServices } from "../../services/serviceService";
import { getBarbers } from "../../services/barberService";
import { createAppointment } from "../../services/appointmentService";

function BookAppointment() {

    const [services, setServices] = useState([]);
    const [barbers, setBarbers] = useState([]);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        serviceId: "",
        barberId: "",
        appointmentDate: "",
        appointmentTime: "",
    });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        try {

            const servicesData = await getAllServices();
            const barbersData = await getBarbers();

            setServices(servicesData);
            setBarbers(barbersData);

        } catch (err) {

            console.error(err);

            setError("Failed to load booking data.");

        } finally {

            setLoading(false);

        }

    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setSaving(true);
        setSuccess("");
        setError("");

        try {

            await createAppointment(formData);

            setSuccess("Appointment booked successfully!");

            setFormData({
                serviceId: "",
                barberId: "",
                appointmentDate: "",
                appointmentTime: "",
            });

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Unable to book appointment."
            );

        } finally {

            setSaving(false);

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

        <section className="book-page">

            <Container>

                <Row className="justify-content-center">

                    <Col lg={7}>

                        <Card className="booking-card">

                            <Card.Body>

                                <div className="text-center mb-4">

                                    <h2>Book Your Appointment</h2>

                                    <p>
                                        Choose your preferred barber,
                                        service, date and time.
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

                                <Form onSubmit={handleSubmit}>

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
                                                    value={service.serviceId}
                                                >
                                                    {service.serviceName}
                                                </option>

                                            ))}

                                        </Form.Select>

                                    </Form.Group>

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
                                                    value={barber.barberId}
                                                >
                                                    {barber.fullName}
                                                </option>

                                            ))}

                                        </Form.Select>

                                    </Form.Group>

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

                                    <Form.Group className="mb-4">

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

                                    <Button
                                        type="submit"
                                        variant="warning"
                                        className="w-100"
                                        disabled={saving}
                                    >

                                        {saving
                                            ? "Booking..."
                                            : "Book Appointment"}

                                    </Button>

                                </Form>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        </section>

    );

}

export default BookAppointment;