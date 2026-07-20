import { Container, Row, Col, Card } from "react-bootstrap";

import testimonial1 from "../../assets/images/testimonial1.png";
import testimonial2 from "../../assets/images/testimonial2.png";
import testimonial3 from "../../assets/images/testimonial3.png";

function Testimonials() {

    const testimonials = [
        {
            image: testimonial1,
            name: "Michael Santos",
            review:
                "The best barber shop I've ever visited. Clean, professional, and the haircut exceeded my expectations.",
            rating: "★★★★★"
        },
        {
            image: testimonial2,
            name: "James Cruz",
            review:
                "Excellent customer service and very skilled barbers. Highly recommended for anyone wanting a premium experience.",
            rating: "★★★★★"
        },
        {
            image: testimonial3,
            name: "Daniel Garcia",
            review:
                "I've been coming here for months. Every haircut is consistently excellent. Worth every peso!",
            rating: "★★★★★"
        }
    ];

    return (
        <section className="testimonials-section">

            <Container>

                <div className="text-center mb-5">

                    <span className="section-badge">
                        TESTIMONIALS
                    </span>

                    <h2 className="section-title">
                        What Our Clients Say
                    </h2>

                    <p className="section-subtitle">
                        Hundreds of satisfied customers trust Director's Cut for
                        premium grooming services.
                    </p>

                </div>

                <Row className="g-4">

                    {testimonials.map((item, index) => (

                        <Col
                            lg={4}
                            md={6}
                            key={index}
                        >

                            <Card className="testimonial-card h-100">

                                <Card.Body className="text-center">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="testimonial-image"
                                    />

                                    <div className="testimonial-rating">
                                        {item.rating}
                                    </div>

                                    <p className="testimonial-review">
                                        "{item.review}"
                                    </p>

                                    <h5 className="testimonial-name">
                                        {item.name}
                                    </h5>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                </Row>

            </Container>

        </section>
    );
}

export default Testimonials;