import { useState, useEffect } from "react";
import {
    Modal,
    Button,
    Form
} from "react-bootstrap";

function BarberModal({
    show,
    handleClose,
    handleSave,
    barber
}) {

    const [formData, setFormData] = useState({
        fullName: "",
        specialization: "",
        isAvailable: true
    });

    useEffect(() => {

        if (barber) {

            setFormData({
                fullName: barber.fullName,
                specialization: barber.specialization,
                isAvailable: barber.isAvailable
            });

        } else {

            setFormData({
                fullName: "",
                specialization: "",
                isAvailable: true
            });

        }

    }, [barber]);

    const handleChange = (e) => {

        const { name, value, checked, type } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox"
                ? checked
                : value
        });

    };

    const submit = () => {

        handleSave(formData);

    };

    return (

        <Modal
            show={show}
            onHide={handleClose}
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>

                    {barber
                        ? "Edit Barber"
                        : "Add Barber"}

                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <Form>

                    <Form.Group className="mb-3">

                        <Form.Label>
                            Full Name
                        </Form.Label>

                        <Form.Control
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>
                            Specialization
                        </Form.Label>

                        <Form.Control
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                            required
                        />

                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        label="Available"
                        name="isAvailable"
                        checked={formData.isAvailable}
                        onChange={handleChange}
                    />

                </Form>

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
                    onClick={submit}
                >
                    Save
                </Button>

            </Modal.Footer>

        </Modal>

    );

}

export default BarberModal;