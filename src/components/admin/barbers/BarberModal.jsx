import { useEffect, useState } from "react";
import {
    Modal,
    Form,
    Button
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

        }
        else {

            setFormData({
                fullName: "",
                specialization: "",
                isAvailable: true
            });

        }

    }, [barber]);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox"
                ? checked
                : value
        });

    };

    const submit = (e) => {

        e.preventDefault();

        handleSave(formData);

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

                        {barber
                            ? "Edit Barber"
                            : "Add Barber"}

                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <Form.Group className="mb-3">

                        <Form.Label>
                            Full Name
                        </Form.Label>

                        <Form.Control
                            type="text"
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
                            type="text"
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
                        Save
                    </Button>

                </Modal.Footer>

            </Form>

        </Modal>

    );
}

export default BarberModal;