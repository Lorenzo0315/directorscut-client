import { Card, Button } from "react-bootstrap";

function ServiceCard({ service }) {
    return (
        <Card className="h-100 shadow-sm border-0">

            <Card.Body>

                <div className="display-5 text-center mb-3">
                    ✂️
                </div>

                <Card.Title className="fw-bold">
                    {service.serviceName}
                </Card.Title>

                <Card.Text className="text-muted">
                    {service.description}
                </Card.Text>

                <hr />

                <div className="d-flex justify-content-between">

                    <strong>
                        ₱{service.price}
                    </strong>

                    <span>
                        {service.duration} mins
                    </span>

                </div>

            </Card.Body>

            <Card.Footer className="bg-white border-0">

                <Button
                    variant="dark"
                    className="w-100"
                >
                    Book Appointment
                </Button>

            </Card.Footer>

        </Card>
    );
}

export default ServiceCard;