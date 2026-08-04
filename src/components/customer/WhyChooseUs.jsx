import { Container, Row, Col } from "react-bootstrap";
import {
    FaUserTie,
    FaCalendarCheck,
    FaAward,
    FaSmile,
    FaTools,
    FaDollarSign
} from "react-icons/fa";

function WhyChooseUs() {

    const features = [
        {
            icon: <FaUserTie />,
            title: "Experienced Barbers",
            description:
                "Professional barbers with years of experience delivering clean cuts and modern styles."
        },
        {
            icon: <FaCalendarCheck />,
            title: "Easy Online Booking",
            description:
                "Book appointments anytime with our fast and hassle-free reservation system."
        },
        {
            icon: <FaAward />,
            title: "Premium Quality",
            description:
                "We provide top-quality grooming services using trusted products and proven techniques."
        },
        {
            icon: <FaTools />,
            title: "Modern Equipment",
            description:
                "Our shop uses professional equipment while maintaining strict cleanliness standards."
        },
        {
            icon: <FaDollarSign />,
            title: "Affordable Prices",
            description:
                "Enjoy premium barber services at reasonable prices without sacrificing quality."
        },
        {
            icon: <FaSmile />,
            title: "Customer Satisfaction",
            description:
                "Your confidence and satisfaction are our top priorities every time you visit."
        }
    ];

    return (

        <section className="why-section py-5">

            <Container>

                <div className="text-center mb-5">

                    <span className="section-badge">
                        Why Choose Us
                    </span>

                    <h2 className="section-title mt-2">
                        Why Customers Choose Director's Cut
                    </h2>

                    <p className="section-subtitle mx-auto">
                        We deliver more than just haircuts. Our goal is to give every
                        customer a premium grooming experience with quality service,
                        skilled professionals, and exceptional customer care.
                    </p>

                </div>

                <Row className="g-4">

                    {features.map((feature, index) => (

                        <Col
                            lg={4}
                            md={6}
                            key={index}
                        >

                            <div className="feature-card h-100 text-center">

                                <div className="feature-icon mb-3">
                                    {feature.icon}
                                </div>

                                <h4 className="mb-3">
                                    {feature.title}
                                </h4>

                                <p className="mb-0">
                                    {feature.description}
                                </p>

                            </div>

                        </Col>

                    ))}

                </Row>

            </Container>

        </section>

    );

}

export default WhyChooseUs;