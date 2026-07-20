import { useEffect, useState } from "react";
import {
    Card,
    Button,
    Table,
    Spinner,
    Alert
} from "react-bootstrap";

import {
    FaPlus,
    FaEdit,
    FaTrash
} from "react-icons/fa";

import ServiceModal from "../../components/admin/services/ServiceModal";

import {
    getAllServices,
    createService,
    updateService,
    deleteService
} from "../../services/serviceService";

function ManageServices() {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        try {

            const data = await getAllServices();

            setServices(data);

        }
        catch (err) {

            console.error(err);

            setError("Failed to load services.");

        }
        finally {

            setLoading(false);

        }
    };

    const saveService = async (data) => {

        try {

            if (selectedService) {

                await updateService(
                    selectedService.serviceId,
                    data
                );

            } else {

                await createService(data);

            }

            setShowModal(false);

            loadServices();

        }
        catch (err) {

            console.error(err);

            alert("Failed to save service.");

        }

    };

    const removeService = async (id) => {

        if (!window.confirm("Delete this service?"))
            return;

        try {

            await deleteService(id);

            loadServices();

        }
        catch (err) {

            console.error(err);

            alert("Failed to delete service.");

        }

    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" />
            </div>
        );
    }

    return (
        <div>

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>
                    Manage Services
                </h2>

                <Button
                    variant="warning"
                    onClick={() => {

                        setSelectedService(null);

                        setShowModal(true);

                    }}
                >
                    <FaPlus className="me-2" />
                    Add Service
                </Button>

            </div>

            {error && (

                <Alert variant="danger">
                    {error}
                </Alert>

            )}

            <Card className="shadow-sm">

                <Card.Body>

                    <Table hover responsive>

                        <thead>

                            <tr>

                                <th>#</th>

                                <th>Service</th>

                                <th>Description</th>

                                <th>Duration</th>

                                <th>Price</th>

                                <th width="150">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {services.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="text-center"
                                    >
                                        No services found.
                                    </td>

                                </tr>

                            )}

                            {services.map((service, index) => (

                                <tr key={service.serviceId}>

                                    <td>{index + 1}</td>

                                    <td>
                                        {service.serviceName}
                                    </td>

                                    <td>
                                        {service.description}
                                    </td>

                                    <td>
                                        {service.duration} mins
                                    </td>

                                    <td>
                                        ₱ {service.price}
                                    </td>

                                    <td>

                                        <Button
                                            size="sm"
                                            variant="primary"
                                            className="me-2"
                                            onClick={() => {

                                                setSelectedService(service);

                                                setShowModal(true);

                                            }}
                                        >
                                            <FaEdit />
                                        </Button>

                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() =>
                                                removeService(
                                                    service.serviceId
                                                )
                                            }
                                        >
                                            <FaTrash />
                                        </Button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </Table>

                </Card.Body>

            </Card>

            <ServiceModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleSave={saveService}
                service={selectedService}
            />

        </div>
    );
}

export default ManageServices;