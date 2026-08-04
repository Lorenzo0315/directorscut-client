import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const appointment = location.state?.appointment;

  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ✅ Handle missing appointment
  if (!appointment) {
    return (
      <Container className="py-5">
        <Alert variant="danger">Appointment information not found.</Alert>
        <Button onClick={() => navigate("/my-appointments")}>Back</Button>
      </Container>
    );
  }

  // ✅ Handle payment submission
  const handlePayment = async () => {
    try {
      setLoading(true);
      setError("");

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
      setError(err.response?.data?.message ?? "Payment failed.");
    } finally {
      setLoading(false);
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
                {/* ✅ Alerts */}
                {success && <Alert variant="success">{success}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                {/* ✅ Appointment Summary */}
                <h4 className="mb-4">Appointment Summary</h4>

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
                      {new Date(appointment.appointmentDate).toLocaleDateString()}
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
                      Total: ₱{Number(appointment.servicePrice).toFixed(2)}
                    </h4>
                  </Col>
                </Row>

                {/* ✅ Payment Method */}
                <Form.Group className="mb-4">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="Cash">Cash</option>
                    <option value="GCash">GCash</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                  </Form.Select>
                </Form.Group>

                {/* ✅ Action Buttons */}
                <div className="d-flex gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/my-appointments")}
                  >
                    Back
                  </Button>

                  <Button
                    variant="success"
                    onClick={handlePayment}
                    disabled={loading}
                  >
                    {loading ? (
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
