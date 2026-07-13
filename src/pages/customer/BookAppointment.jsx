import { Button, Container, Form } from "react-bootstrap";

function BookAppointment() {
    return (
        <Container>

            <h2 className="page-title">
                Book Appointment
            </h2>

            <Form>

                <Form.Group className="mb-3">
                    <Form.Label>
                        Service
                    </Form.Label>

                    <Form.Select>
                        <option>Select Service</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>
                        Barber
                    </Form.Label>

                    <Form.Select>
                        <option>Select Barber</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>
                        Date
                    </Form.Label>

                    <Form.Control type="date" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>
                        Time
                    </Form.Label>

                    <Form.Control type="time" />
                </Form.Group>

                <Button variant="dark">
                    Book Appointment
                </Button>

            </Form>

        </Container>
    );
}

export default BookAppointment;