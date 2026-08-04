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
import {
    createAppointment,
    getAvailableSlots,
} from "../../services/appointmentService";

import BookingSummary from "../../components/customer/BookingSummary";

function BookAppointment() {

    const [services, setServices] = useState([]);
    const [barbers, setBarbers] = useState([]);
    const [availableSlots, setAvailableSlots] = useState([]);

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

    const selectedService = services.find(
        service => service.serviceId === Number(formData.serviceId)
    );

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {

        if (formData.barberId && formData.appointmentDate) {
            loadAvailableSlots();
        } else {
            setAvailableSlots([]);
        }

    }, [formData.barberId, formData.appointmentDate]);

    const loadData = async () => {

        try {

            const servicesData = await getAllServices();
            const barbersData = await getBarbers();

            setServices(servicesData);
            setBarbers(barbersData);

        }
        catch (err) {

            console.error(err);
            setError("Failed to load booking data.");

        }
        finally {

            setLoading(false);

        }

    };

    const loadAvailableSlots = async () => {

        try {

            const slots = await getAvailableSlots(
                formData.barberId,
                formData.appointmentDate
            );

            setAvailableSlots(slots);

        }
        catch (err) {

            console.error(err);
            setAvailableSlots([]);

        }

    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData(prev => ({

            ...prev,

            [name]: value,

            ...(name === "barberId" || name === "appointmentDate"
                ? { appointmentTime: "" }
                : {})

        }));

    };

    const convertToTimeSpan = (time) => {

        if (!time) return "";

        if (!time.includes("AM") && !time.includes("PM")) {

            return `${time}:00`;

        }

        const [clock, modifier] = time.split(" ");

        let [hours, minutes] = clock.split(":");

        hours = parseInt(hours, 10);

        if (modifier === "PM" && hours !== 12) {
            hours += 12;
        }

        if (modifier === "AM" && hours === 12) {
            hours = 0;
        }

        return `${String(hours).padStart(2, "0")}:${minutes}:00`;

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setSaving(true);
        setSuccess("");
        setError("");

        try {

            const dto = {

                serviceId: Number(formData.serviceId),
                barberId: Number(formData.barberId),
                appointmentDate: formData.appointmentDate,
                appointmentTime: convertToTimeSpan(
                    formData.appointmentTime
                )

            };

            console.log("Sending Appointment DTO:");
            console.log(dto);

            await createAppointment(dto);

            setSuccess("Appointment booked successfully!");

            setFormData({

                serviceId: "",
                barberId: "",
                appointmentDate: "",
                appointmentTime: "",

            });

            setAvailableSlots([]);

        }
        catch (err) {

            console.error("FULL ERROR:");
            console.log(err.response);

            if (err.response?.data?.errors) {

                const errors = err.response.data.errors;

                let message = "";

                Object.keys(errors).forEach(key => {

                    message += `${key}: ${errors[key].join(", ")}\n`;

                });

                setError(message);

            }
            else {

                setError(

                    err.response?.data?.message ||
                    err.response?.data?.title ||
                    "Unable to book appointment."

                );

            }

        }
        finally {

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

        <section className="book-page py-5">

            <Container>

                <Row className="g-4">

                    <Col lg={8}>

                        <Card className="booking-card shadow">

                            <Card.Body>

                                <div className="text-center mb-4">

                                    <h2>Book Your Appointment</h2>

                                    <p>
                                        Choose your preferred barber,
                                        service, date and available time.
                                    </p>

                                </div>

                                {success &&
                                    <Alert variant="success">
                                        {success}
                                    </Alert>
                                }

                                {error &&
                                    <Alert variant="danger" style={{whiteSpace:"pre-line"}}>
                                        {error}
                                    </Alert>
                                }

                                <Form onSubmit={handleSubmit}>

                                    <Form.Group className="mb-3">

                                        <Form.Label>Service</Form.Label>

                                        <Form.Select
                                            name="serviceId"
                                            value={formData.serviceId}
                                            onChange={handleChange}
                                            required
                                        >

                                            <option value="">
                                                Select Service
                                            </option>

                                            {services.map(service => (

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

                                        <Form.Label>Barber</Form.Label>

                                        <Form.Select
                                            name="barberId"
                                            value={formData.barberId}
                                            onChange={handleChange}
                                            required
                                        >

                                            <option value="">
                                                Select Barber
                                            </option>

                                            {barbers.map(barber => (

                                                <option
                                                    key={barber.barberId}
                                                    value={barber.barberId}
                                                >
                                                    {barber.fullName} — {barber.specialization}
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
                                            min={new Date().toISOString().split("T")[0]}
                                            required
                                        />

                                    </Form.Group>

                                    <Form.Group className="mb-4">

                                        <Form.Label>
                                            Available Time
                                        </Form.Label>

                                        <Form.Select
                                            name="appointmentTime"
                                            value={formData.appointmentTime}
                                            onChange={handleChange}
                                            required
                                            disabled={!availableSlots.length}
                                        >

                                            <option value="">
                                                {availableSlots.length
                                                    ? "Select Time"
                                                    : "No Available Slots"}
                                            </option>

                                            {availableSlots.map(slot => (

                                                <option
                                                    key={slot}
                                                    value={slot}
                                                >
                                                    {slot}
                                                </option>

                                            ))}

                                        </Form.Select>

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

                    <Col lg={4}>

                        <BookingSummary
                            service={selectedService}
                            barber={barbers.find(
                                b => b.barberId === Number(formData.barberId)
                            )}
                            appointmentDate={formData.appointmentDate}
                            appointmentTime={formData.appointmentTime}
                        />

                    </Col>

                </Row>

            </Container>

        </section>

    );

}

export default BookAppointment;