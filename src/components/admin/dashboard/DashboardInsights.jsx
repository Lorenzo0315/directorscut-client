import { Row, Col, Card } from "react-bootstrap";
import {
    FaUserTie,
    FaCut,
    FaMoneyBillWave,
    FaCalendarAlt,
    FaChartLine,
    FaUsers
} from "react-icons/fa";

function DashboardInsights({ insights }) {

    const cards = [
        {
            title: "Top Barber",
            value: insights?.topBarber ?? "No Data",
            icon: <FaUserTie />,
            color: "#2563EB"
        },
        {
            title: "Most Popular Service",
            value: insights?.mostPopularService ?? "No Data",
            icon: <FaCut />,
            color: "#F59E0B"
        },
        {
            title: "Best Revenue Month",
            value: insights?.bestRevenueMonth ?? "No Data",
            icon: <FaMoneyBillWave />,
            color: "#10B981"
        },
        {
            title: "Busiest Day",
            value: insights?.busiestDay ?? "No Data",
            icon: <FaCalendarAlt />,
            color: "#8B5CF6"
        },
        {
            title: "Average Daily Revenue",
            value:
                insights?.averageDailyRevenue != null
                    ? `₱ ${Number(
                          insights.averageDailyRevenue
                      ).toLocaleString()}`
                    : "₱ 0",
            icon: <FaChartLine />,
            color: "#06B6D4"
        },
        {
            title: "New Customers This Month",
            value: insights?.newCustomersThisMonth ?? 0,
            icon: <FaUsers />,
            color: "#EF4444"
        }
    ];

    return (

        <>

            <h4
                className="fw-bold mb-3"
                style={{ color: "#1F2937" }}
            >
                Business Insights
            </h4>

            <Row className="g-4">

                {cards.map((card, index) => (

                    <Col
                        lg={4}
                        md={6}
                        key={index}
                    >

                        <Card
                            className="border-0 shadow-sm h-100"
                            style={{
                                borderRadius: "18px"
                            }}
                        >

                            <Card.Body className="d-flex align-items-center">

                                <div
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "16px",
                                        background: `${card.color}15`,
                                        color: card.color,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.6rem",
                                        marginRight: "18px"
                                    }}
                                >
                                    {card.icon}
                                </div>

                                <div>

                                    <small
                                        className="text-muted fw-semibold"
                                    >
                                        {card.title}
                                    </small>

                                    <h5
                                        className="fw-bold mt-2 mb-0"
                                        style={{
                                            color: "#111827"
                                        }}
                                    >
                                        {card.value}
                                    </h5>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

        </>

    );

}

export default DashboardInsights;