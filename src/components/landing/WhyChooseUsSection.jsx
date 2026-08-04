import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import {
    FaCut,
    FaUserTie,
    FaCalendarAlt,
    FaAward
} from "react-icons/fa";

function WhyChooseUsSection() {

    const features = [

        {
            icon: <FaCut />,
            title: "Precision Haircuts",
            description:
                "Every haircut is tailored to your face shape and personal style for the perfect finish."
        },

        {
            icon: <FaUserTie />,
            title: "Professional Barbers",
            description:
                "Experienced and highly skilled barbers dedicated to delivering exceptional grooming."
        },

        {
            icon: <FaCalendarAlt />,
            title: "Online Booking",
            description:
                "Book appointments anytime with our easy and convenient online reservation system."
        },

        {
            icon: <FaAward />,
            title: "Premium Experience",
            description:
                "Modern equipment, quality products, and excellent customer service every visit."
        }

    ];

    return (

        <section
            id="about"
            className="why-section"
        >

            <Container>

                <div className="text-center mb-5">

                    <span className="section-subtitle">
                        WHY CHOOSE US
                    </span>

                    <h2 className="section-title text-white">

                        More Than Just A Haircut

                    </h2>

                    <p
                        className="section-description mx-auto text-light"
                        style={{ maxWidth: "700px" }}
                    >
                        We combine expert craftsmanship,
                        premium service,
                        and modern technology
                        to provide the best barber shop experience.

                    </p>

                </div>

                <Row className="g-4">

                    {features.map((feature, index) => (

                        <Col
                            lg={3}
                            md={6}
                            key={index}
                        >

                            <div className="feature-card">

                                <div className="feature-icon">

                                    {feature.icon}

                                </div>

                                <h4>

                                    {feature.title}

                                </h4>

                                <p>

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

export default WhyChooseUsSection;