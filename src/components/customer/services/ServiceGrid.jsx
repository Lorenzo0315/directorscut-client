import { Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

function ServiceGrid({ services }) {
    return (
        <Row className="g-4">

            {services.map((service) => (

                <Col
                    key={service.serviceId}
                    lg={4}
                    md={6}
                >
                    <ServiceCard service={service} />
                </Col>

            ))}

        </Row>
    );
}

export default ServiceGrid;