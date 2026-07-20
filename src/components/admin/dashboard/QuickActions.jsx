import { Card, Row, Col, Button } from "react-bootstrap";
import {
    FaCalendarAlt,
    FaCut,
    FaConciergeBell,
    FaChartBar
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function QuickActions() {

    const navigate = useNavigate();

    const actions = [
        {
            title: "Appointments",
            icon: <FaCalendarAlt size={24} />,
            color: "#2563EB",
            path: "/admin/appointments"
        },
        {
            title: "Barbers",
            icon: <FaCut size={24} />,
            color: "#F59E0B",
            path: "/admin/barbers"
        },
        {
            title: "Services",
            icon: <FaConciergeBell size={24} />,
            color: "#10B981",
            path: "/admin/services"
        },
        {
            title: "Reports",
            icon: <FaChartBar size={24} />,
            color: "#8B5CF6",
            path: "/admin/reports"
        }
    ];

    return (

        <Card
            className="border-0 shadow-sm mb-4"
            style={{
                borderRadius: "18px"
            }}
        >

            <Card.Body>

                <h5 className="fw-bold mb-4">

                    Quick Actions

                </h5>

                <Row>

                    {actions.map((action, index) => (

                        <Col
                            lg={3}
                            md={6}
                            className="mb-3"
                            key={index}
                        >

                            <Button
                                className="w-100 py-4 border-0"
                                style={{
                                    borderRadius: "16px",
                                    background: action.color,
                                    fontWeight: "600"
                                }}
                                onClick={() => navigate(action.path)}
                            >

                                <div className="mb-2">

                                    {action.icon}

                                </div>

                                {action.title}

                            </Button>

                        </Col>

                    ))}

                </Row>

            </Card.Body>

        </Card>

    );

}

export default QuickActions;