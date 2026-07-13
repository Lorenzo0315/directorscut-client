import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../ui/SectionTitle";

function AboutSection() {
    return (
        <section className="about-section">
            <Container>

                <SectionTitle
                    title="About Director's Cut"
                    subtitle="Where style meets precision and every haircut is crafted with excellence."
                    center
                />

                <Row className="align-items-center g-5">

                    <Col lg={6}>
                        <img
                            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900"
                            alt="Barber Shop"
                            className="about-image"
                        />
                    </Col>

                    <Col lg={6}>

                        <h3 className="about-heading">
                            Premium Grooming Experience
                        </h3>

                        <p className="about-text">
                            Director's Cut Barber Shop is dedicated to providing
                            exceptional grooming services with skilled barbers,
                            modern equipment, and outstanding customer service.
                        </p>

                        <p className="about-text">
                            Whether you're looking for a classic haircut, beard
                            styling, hair coloring, or a complete makeover, our
                            experienced team ensures every client leaves looking
                            and feeling their best.
                        </p>

                        <div className="about-stats">

                            <div className="about-stat">
                                <h2>10+</h2>
                                <span>Years Experience</span>
                            </div>

                            <div className="about-stat">
                                <h2>5K+</h2>
                                <span>Happy Clients</span>
                            </div>

                            <div className="about-stat">
                                <h2>15+</h2>
                                <span>Professional Barbers</span>
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>
        </section>
    );
}

export default AboutSection;