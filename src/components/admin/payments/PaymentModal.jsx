import { useEffect, useState } from "react";
import {
    Modal,
    Form,
    Button
} from "react-bootstrap";

function PaymentModal({
    show,
    handleClose,
    handleSave,
    payment
}) {

    const [paymentStatus, setPaymentStatus] = useState("Pending");

    useEffect(() => {

        if (payment) {
            setPaymentStatus(payment.paymentStatus);
        }

    }, [payment]);

    const submit = (e) => {

        e.preventDefault();

        handleSave({
            paymentStatus
        });

    };

    return (

        <Modal
            show={show}
            onHide={handleClose}
            centered
        >

            <Form onSubmit={submit}>

                <Modal.Header closeButton>

                    <Modal.Title>
                        Update Payment Status
                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <Form.Group>

                        <Form.Label>
                            Payment Status
                        </Form.Label>

                        <Form.Select
                            value={paymentStatus}
                            onChange={(e) =>
                                setPaymentStatus(e.target.value)
                            }
                        >

                            <option value="Pending">
                                Pending
                            </option>

                            <option value="Paid">
                                Paid
                            </option>

                            <option value="Refunded">
                                Refunded
                            </option>

                            <option value="Failed">
                                Failed
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

export default PaymentModal;