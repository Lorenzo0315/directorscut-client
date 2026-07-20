import { useEffect, useState } from "react";
import {
    Modal,
    Button,
    Form
} from "react-bootstrap";

function ServiceModal({
    show,
    handleClose,
    handleSave,
    service
}) {

    const [formData, setFormData] = useState({
        serviceName: "",
        description: "",
        duration: "",
        price: ""
    });

    useEffect(() => {

        if (service) {

            setFormData({
                serviceName: service.serviceName,
                description: service.description,
                duration: service.duration,
                price: service.price
            });

        } else {

            setFormData({
                serviceName: "",
                description: "",
                duration: "",
                price: ""
            });

        }

    }, [service]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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

                    {service ? "Edit Service" : "Add Service"}

                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <Form>

                    <Form.Group className="mb-3">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control
                            name="serviceName"
                            value={formData.serviceName}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Duration (minutes)</Form.Label>
                        <Form.Control
                            type="number"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.01"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </Form.Group>

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

export default ServiceModal;