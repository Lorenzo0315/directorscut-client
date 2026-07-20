import { useEffect, useState } from "react";
import {
    Card,
    Button,
    Table,
    Spinner,
    Alert,
    Badge
} from "react-bootstrap";

import {
    FaPlus,
    FaEdit,
    FaTrash
} from "react-icons/fa";

import BarberModal from "../../components/admin/barbers/BarberModal";

import {
    getBarbers,
    createBarber,
    updateBarber,
    deleteBarber
} from "../../services/barberService";

function ManageBarbers() {

    const [barbers, setBarbers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [selectedBarber, setSelectedBarber] = useState(null);

    useEffect(() => {
        loadBarbers();
    }, []);

    const loadBarbers = async () => {

        try {

            const data = await getBarbers();

            setBarbers(data);

        }
        catch (err) {

            console.error(err);

            setError("Failed to load barbers.");

        }
        finally {

            setLoading(false);

        }

    };

    const saveBarber = async (data) => {

        try {

            if (selectedBarber) {

                await updateBarber(
                    selectedBarber.barberId,
                    data
                );

            } else {

                await createBarber(data);

            }

            setShowModal(false);
            setSelectedBarber(null);

            loadBarbers();

        }
        catch (err) {

            console.error(err);

            alert("Failed to save barber.");

        }

    };

    const removeBarber = async (id) => {

        if (!window.confirm("Delete this barber?"))
            return;

        try {

            await deleteBarber(id);

            loadBarbers();

        }
        catch (err) {

            console.error(err);

            alert("Failed to delete barber.");

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
                    Manage Barbers
                </h2>

                <Button
                    variant="warning"
                    onClick={() => {

                        setSelectedBarber(null);
                        setShowModal(true);

                    }}
                >

                    <FaPlus className="me-2" />

                    Add Barber

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

                                <th>Barber</th>

                                <th>Specialization</th>

                                <th>Status</th>

                                <th width="150">

                                    Actions

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {barbers.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="text-center"
                                    >

                                        No barbers found.

                                    </td>

                                </tr>

                            )}

                            {barbers.map((barber, index) => (

                                <tr key={barber.barberId}>

                                    <td>{index + 1}</td>

                                    <td>

                                        {barber.fullName}

                                    </td>

                                    <td>

                                        {barber.specialization}

                                    </td>

                                    <td>

                                        {barber.isAvailable ? (

                                            <Badge bg="success">

                                                Available

                                            </Badge>

                                        ) : (

                                            <Badge bg="danger">

                                                Unavailable

                                            </Badge>

                                        )}

                                    </td>

                                    <td>

                                        <Button
                                            size="sm"
                                            variant="primary"
                                            className="me-2"
                                            onClick={() => {

                                                setSelectedBarber(barber);

                                                setShowModal(true);

                                            }}
                                        >

                                            <FaEdit />

                                        </Button>

                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() =>
                                                removeBarber(
                                                    barber.barberId
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

            <BarberModal
                show={showModal}
                handleClose={() => {

                    setShowModal(false);
                    setSelectedBarber(null);

                }}
                handleSave={saveBarber}
                barber={selectedBarber}
            />

        </div>

    );

}

export default ManageBarbers;