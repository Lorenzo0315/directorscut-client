import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";

import { createPayment } from "../../services/paymentService";
import { getMyAppointments } from "../../services/appointmentService";

function PaymentPage() {
  const navigate = useNavigate();
  const { appointmentId } = useParams();

  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Load appointment using the ID from the URL
  useEffect(() => {
    const loadAppointment = async () => {
      try {
        setLoading(true);
        setError("");

        const appointments = await getMyAppointments();

        const foundAppointment = appointments.find(
          (item) =>
            Number(item.appointmentId) === Number(appointmentId)
        );

        if (!foundAppointment) {
          setError("Appointment information not found.");
          return;
        }

        setAppointment(foundAppointment);
      } catch (err) {
        console.error(err);

        setError(
          err.response?.data?.message ??
          "Failed to load appointment information."
        );
      } finally {
        setLoading(false);
      }
    };

    loadAppointment();
  }, [appointmentId]);

  // Loading appointment
  if (loading) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <Spinner animation="border" variant="warning" />
          <p className="mt-3">Loading appointment...</p>
        </div>
      </Container>
    );
  }

  // Appointment not found
  if (!appointment) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          {error || "Appointment information not found."}
        </Alert>

        <Button
          variant="primary"
          onClick={() => navigate("/my-appointments")}
        >
          Back
        </Button>
      </Container>
    );
  }

  // Handle payment submission
  const handlePayment = async () => {
    try {
      setPaymentLoading(true);
      setError("");
      setSuccess("");

      await createPayment({
        appointmentId: appointment.appointmentId,
        amount: appointment.servicePrice,
        paymentMethod,
      });

      setSuccess("Payment completed successfully!");

      setTimeout(() => {
        navigate("/my-payments");
      }, 1500);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ??
        "Payment failed."
      );
    } finally {
      setPaymentLoading(false);
    }
  };

  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow border-0">
              <Card.Header className="bg-warning text-dark">
                <h3 className="mb-0">Payment</h3>
              </Card.Header>

              <Card.Body>
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

                <h4 className="mb-4">
                  Appointment Summary
                </h4>

                <Row className="mb-3">
                  <Col md={6}>
                    <strong>Service</strong>
                    <p>{appointment.serviceName}</p>
                  </Col>

                  <Col md={6}>
                    <strong>Barber</strong>
                    <p>{appointment.barberName}</p>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <strong>Date</strong>
                    <p>
                      {new Date(
                        appointment.appointmentDate
                      ).toLocaleDateString()}
                    </p>
                  </Col>

                  <Col md={6}>
                    <strong>Time</strong>
                    <p>{appointment.appointmentTime}</p>
                  </Col>
                </Row>

                <Row className="mb-4">
                  <Col>
                    <h4 className="text-success fw-bold">
                      Total: ₱
                      {Number(
                        appointment.servicePrice
                      ).toFixed(2)}
                    </h4>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>
                    Payment Method
                  </Form.Label>

                  <Form.Select
                    value={paymentMethod}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  >
                    <option value="Cash">Cash</option>
                    <option value="GCash">GCash</option>
                    <option value="Credit Card">
                      Credit Card
                    </option>
                    <option value="Debit Card">
                      Debit Card
                    </option>
                  </Form.Select>
                </Form.Group>

                <div className="d-flex gap-3">
                  <Button
                    variant="secondary"
                    onClick={() =>
                      navigate("/my-appointments")
                    }
                  >
                    Back
                  </Button>

                  <Button
                    variant="success"
                    onClick={handlePayment}
                    disabled={paymentLoading}
                  >
                    {paymentLoading ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          className="me-2"
                        />
                        Processing...
                      </>
                    ) : (
                      "Confirm Payment"
                    )}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PaymentPage;