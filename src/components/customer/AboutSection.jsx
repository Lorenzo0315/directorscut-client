import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

import SectionTitle from "../ui/SectionTitle";
import aboutImage from "../../assets/images/about.png";

function AboutSection() {
    return (
        <section className="about-section">
            <Container>

                <SectionTitle
                    title="About Director's Cut"
                    subtitle="Where style meets precision, professionalism, and premium grooming."
                    center
                />

                <Row className="align-items-center g-5">

                    <Col lg={6}>
                        <div className="about-image-wrapper">
                            <img
                                src={aboutImage}
                                alt="Director's Cut Barber Shop"
                                className="about-image"
                            />
                        </div>
                    </Col>

                    <Col lg={6}>

                        <span className="section-badge">
                            Premium Barber Shop
                        </span>

                        <h2 className="about-heading">
                            We Deliver More Than Just Haircuts
                        </h2>

                        <p className="about-text">
                            At Director's Cut, we believe every haircut should
                            leave you feeling confident. Our skilled barbers
                            combine modern techniques with classic barbering
                            traditions to give every client a premium grooming
                            experience.
                        </p>

                        <div className="about-features">

                            <div className="about-feature">
                                <FaCheckCircle className="feature-icon" />
                                <span>Professional & Experienced Barbers</span>
                            </div>

                            <div className="about-feature">
                                <FaCheckCircle className="feature-icon" />
                                <span>Modern Equipment & Premium Products</span>
                            </div>

                            <div className="about-feature">
                                <FaCheckCircle className="feature-icon" />
                                <span>Comfortable & Relaxing Environment</span>
                            </div>

                        </div>

                        <div className="about-stats">

                            <div className="about-stat">
                                <h3>10+</h3>
                                <p>Years Experience</p>
                            </div>

                            <div className="about-stat">
                                <h3>5K+</h3>
                                <p>Happy Clients</p>
                            </div>

                            <div className="about-stat">
                                <h3>15+</h3>
                                <p>Expert Barbers</p>
                            </div>

                        </div>

                        <Button
                            variant="warning"
                            size="lg"
                            className="mt-4 px-4"
                        >
                            Learn More
                        </Button>

                    </Col>

                </Row>

            </Container>
        </section>
    );
}

export default AboutSection;