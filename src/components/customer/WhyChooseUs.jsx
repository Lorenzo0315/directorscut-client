import { Container, Row, Col } from "react-bootstrap";
import {
    FaUserTie,
    FaCalendarCheck,
    FaAward,
    FaSmile,
    FaTools,
    FaDollarSign,
} from "react-icons/fa";

function WhyChooseUs() {
    const features = [
        {
            icon: <FaUserTie />,
            title: "Experienced Barbers",
            description:
                "Our skilled barbers combine classic techniques with modern trends to give you the perfect style.",
        },
        {
            icon: <FaCalendarCheck />,
            title: "Easy Online Booking",
            description:
                "Book your appointment anytime with our convenient and hassle-free online reservation system.",
        },
        {
            icon: <FaAward />,
            title: "Premium Products",
            description:
                "We use only trusted grooming products to ensure the highest quality service for every client.",
        },
        {
            icon: <FaTools />,
            title: "Modern Equipment",
            description:
                "Our shop is equipped with professional tools and maintains the highest hygiene standards.",
        },
        {
            icon: <FaDollarSign />,
            title: "Affordable Pricing",
            description:
                "Enjoy premium grooming services at competitive prices without compromising quality.",
        },
        {
            icon: <FaSmile />,
            title: "Customer Satisfaction",
            description:
                "Thousands of satisfied customers trust Director's Cut for consistent quality and excellent service.",
        },
    ];

    return (
        <section className="why-section py-5">

            <Container>

                <div className="text-center mb-5">

                    <span className="section-badge">
                        Why Choose Us
                    </span>

                    <h2 className="section-title">
                        Why Choose Director's Cut
                    </h2>

                    <p className="section-subtitle">
                        We provide more than just haircuts—we deliver confidence,
                        comfort, and premium grooming experiences every visit.
                    </p>

                </div>

                <Row className="g-4">

                    {features.map((feature, index) => (

                        <Col
                            lg={4}
                            md={6}
                            key={index}
                        >

                            <div className="feature-card">

                                <div className="feature-icon">
                                    {feature.icon}
                                </div>

                                <h4>{feature.title}</h4>

                                <p>{feature.description}</p>

                            </div>

                        </Col>

                    ))}

                </Row>

            </Container>

        </section>
    );
}

export default WhyChooseUs;