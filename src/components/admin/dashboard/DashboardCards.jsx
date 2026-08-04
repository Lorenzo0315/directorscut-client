import { Row, Col, Card } from "react-bootstrap";
import "./dashboard.css";

import {
    FaUsers,
    FaUserShield,
    FaCut,
    FaConciergeBell,
    FaCalendarCheck,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
    FaMoneyBillWave,
    FaCoins,
    FaChartLine
} from "react-icons/fa";

function DashboardCards({ dashboard }) {

    if (!dashboard) return null;

    const cards = [
        {
            title: "Customers",
            value: dashboard.totalCustomers ?? 0,
            icon: <FaUsers />,
            color: "#2563EB"
        },
        {
            title: "Admins",
            value: dashboard.totalStaff ?? 0,
            icon: <FaUserShield />,
            color: "#6366F1"
        },
        {
            title: "Barbers",
            value: dashboard.totalBarbers ?? 0,
            icon: <FaCut />,
            color: "#D97706"
        },
        {
            title: "Services",
            value: dashboard.totalServices ?? 0,
            icon: <FaConciergeBell />,
            color: "#0891B2"
        },
        {
            title: "Appointments",
            value: dashboard.totalAppointments ?? 0,
            icon: <FaCalendarCheck />,
            color: "#64748B"
        },
        {
            title: "Pending",
            value: dashboard.pendingAppointments ?? 0,
            icon: <FaClock />,
            color: "#CA8A04"
        },
        {
            title: "Completed",
            value: dashboard.completedAppointments ?? 0,
            icon: <FaCheckCircle />,
            color: "#15803D"
        },
        {
            title: "Cancelled",
            value: dashboard.cancelledAppointments ?? 0,
            icon: <FaTimesCircle />,
            color: "#B91C1C"
        },
        {
            title: "Total Revenue",
            value: `₱ ${(dashboard.totalRevenue ?? 0).toLocaleString()}`,
            icon: <FaMoneyBillWave />,
            color: "#047857"
        },
        {
            title: "Today's Revenue",
            value: `₱ ${(dashboard.todayRevenue ?? 0).toLocaleString()}`,
            icon: <FaCoins />,
            color: "#2563EB"
        },
        {
            title: "Monthly Revenue",
            value: `₱ ${(dashboard.thisMonthRevenue ?? 0).toLocaleString()}`,
            icon: <FaChartLine />,
            color: "#7C3AED"
        }
    ];

    return (
        <Row className="g-4">
            {cards.map((card, index) => (
                <Col lg={4} md={6} key={index}>
                    <Card
                        className="border-0 shadow-sm dashboard-card h-100"
                        style={{
                            background: "#FFFFFF",
                            borderRadius: "16px"
                        }}
                    >
                        <Card.Body className="d-flex justify-content-between align-items-center p-4">

                            <div>

                                <small
                                    className="text-muted fw-semibold text-uppercase"
                                    style={{
                                        fontSize: ".8rem",
                                        letterSpacing: ".5px"
                                    }}
                                >
                                    {card.title}
                                </small>

                                <h2
                                    className="fw-bold text-dark mt-2 mb-0"
                                >
                                    {card.value}
                                </h2>

                            </div>

                            <div
                                className="dashboard-icon"
                                style={{
                                    background: `${card.color}20`,
                                    color: card.color
                                }}
                            >
                                {card.icon}
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default DashboardCards;