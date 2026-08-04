import {
    Navbar,
    Nav,
    Container,
    Button,
    Row,
    Col,
    Card
} from "react-bootstrap";

import {
    FaCut,
    FaUserTie,
    FaCalendarCheck,
    FaStar
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


import heroImage from "../assets/images/hero-barber.jpg";

import { getAllServices } from "../services/serviceService";
import { getBarbers } from "../services/barberService";

import barber1 from "../assets/images/barber1.png";
import barber2 from "../assets/images/barber2.png";
import barber3 from "../assets/images/barber3.png";

import haircutImg from "../assets/images/haircut.jpg";
import beardImg from "../assets/images/beard.jpg";
import treatmentImg from "../assets/images/treatment.jpg";
import haircolorImg from "../assets/images/haircolor.jpg";

function LandingPage() {

    const [services, setServices] = useState([]);
    const [barbers, setBarbers] = useState([]);

    useEffect(() => {
        loadServices();
        loadBarbers();
    }, []);

    const loadServices = async () => {
        try {
            const data = await getAllServices();
            setServices(data);
        } catch (error) {
            console.error("Failed to load services:", error);
        }
    };

    const loadBarbers = async () => {
        try {
            const data = await getBarbers();
            setBarbers(data);
        } catch (error) {
            console.error("Failed to load barbers:", error);
        }
    };

    const barberImages = [
    barber1,
    barber2,
    barber3
    ];

    const serviceImages = [
    haircutImg,
    beardImg,
    treatmentImg,
    haircolorImg
];

    return (
        <>

            {/* ================= NAVBAR ================= */}

            {/* ================= NAVBAR ================= */}

<Navbar
    expand="lg"
    fixed="top"
    className="landing-navbar py-3"
>
    <Container>

        <Navbar.Brand
            className="fw-bold fs-2 text-warning"
        >
            Director's Cut
        </Navbar.Brand>

        <Navbar.Toggle
            className="bg-warning"
        />

        <Navbar.Collapse>

            <Nav className="ms-auto align-items-center">

                <Nav.Link href="#services">
                    Services
                </Nav.Link>

                <Nav.Link href="#barbers">
                    Barbers
                </Nav.Link>

                <Nav.Link href="#about">
                    About
                </Nav.Link>

                <Nav.Link href="#contact">
                    Contact
                </Nav.Link>

                <Button
                    as={Link}
                    to="/login"
                    className="ms-lg-4 px-4 rounded-pill"
                    variant="warning"
                >
                    Login
                </Button>

            </Nav>

        </Navbar.Collapse>

    </Container>

</Navbar>

            {/* ================= HERO ================= */}

           <section className="hero-section">

    <Container>

        <Row className="align-items-center min-vh-100">

            <Col lg={7}>

                <span className="hero-badge">
                    PREMIUM BARBERSHOP
                </span>

                <h1 className="hero-title mt-4">
                    More Than A Haircut.
                    <br />
                    It's Your Signature Style.
                </h1>

                <p className="hero-text mt-4">

                    Director's Cut combines classic craftsmanship,
                    modern styling, and online appointment booking
                    to deliver the ultimate grooming experience.

                </p>

                <div className="d-flex gap-3 mt-5">

                    <Button
                        as={Link}
                        to="/register"
                        className="hero-btn"
                    >
                        Book Appointment
                    </Button>

                    <Button
                        as={Link}
                        to="/login"
                        variant="outline-light"
                        className="hero-btn-outline"
                    >
                        Login
                    </Button>

                </div>

                <Row className="mt-5">

                    <Col xs={4}>

                        <h2 className="text-warning fw-bold">
                            10+
                        </h2>

                        <small>Years Experience</small>

                    </Col>

                    <Col xs={4}>

                        <h2 className="text-warning fw-bold">
                            5000+
                        </h2>

                        <small>Happy Clients</small>

                    </Col>

                    <Col xs={4}>

                        <h2 className="text-warning fw-bold">
                            ★ 4.9
                        </h2>

                        <small>Customer Rating</small>

                    </Col>

                </Row>

            </Col>

            <Col lg={5} className="d-none d-lg-flex justify-content-center">

    <div className="hero-card">

        <div className="hero-card-top">

            <span className="rating-star">★★★★★</span>

            <h3>4.9 Rating</h3>

            <p>Trusted by thousands of satisfied clients.</p>

        </div>

        <hr />

        <div className="hero-feature">

            <span>✔</span>

            <p>Professional & Experienced Barbers</p>

        </div>

        <div className="hero-feature">

            <span>✔</span>

            <p>Easy Online Appointment Booking</p>

        </div>

        <div className="hero-feature">

            <span>✔</span>

            <p>Premium Haircuts & Beard Grooming</p>

        </div>

        <div className="hero-feature">

            <span>✔</span>

            <p>Modern Equipment & Comfortable Shop</p>

        </div>

    </div>

</Col>

        </Row>

    </Container>

</section>

            {/* ================= SERVICES ================= */}

           <section
    id="services"
    className="py-5 services-section"
>
    <Container>

        <div className="section-title text-center mb-5">

            <span className="section-subtitle">
                PREMIUM GROOMING
            </span>

            <h2 className="fw-bold mt-2">
                Our Services
            </h2>

            <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
                Every service is delivered with precision,
                professionalism, and attention to detail to ensure
                you leave looking and feeling your absolute best.
            </p>

        </div>

        <Row className="g-4">

            {services.map((service, index) => (

                <Col
                    lg={4}
                    md={6}
                    key={service.serviceId}
                >

                    <Card className="service-card h-100 border-0">

                        <div className="service-image-wrapper">

    <Card.Img
    src={
        service.imageUrl ||
        serviceImages[index % serviceImages.length]
    }
    className="service-image"
/>

    <span className="price-tag">
        ₱{service.price}
    </span>

    <span className="service-badge">
        Most Popular
    </span>

</div>

                        <Card.Body>

                            <h4 className="fw-bold mb-3">
                                {service.serviceName}
                            </h4>

                            <p className="service-description">
                                {service.description}
                            </p>

                            <div className="service-footer">

                                <span className="service-duration">

    ⏱ {service.duration} Minutes

</span>

                                <Button
                                    as={Link}
                                    to="/register"
                                    className="book-service-btn"
                                >
                                    Book Now
                                </Button>

                            </div>

                        </Card.Body>

                    </Card>

                </Col>

            ))}

        </Row>

    </Container>
</section>

            {/* ================= BARBERS ================= */}

            <section
    id="barbers"
    className="barbers-section py-5"
>
    <Container>

        <div className="section-title text-center mb-5">

            <span className="section-subtitle">
                PROFESSIONAL TEAM
            </span>

            <h2 className="fw-bold mt-2">
                Meet Our Expert Barbers
            </h2>

            <p
                className="text-muted mx-auto"
                style={{ maxWidth: "650px" }}
            >
                Every barber at Director's Cut is dedicated to delivering
                premium service with attention to detail and years of experience.
            </p>

        </div>

        <Row className="g-4">

            {barbers.map((barber, index) => (

                <Col
                    lg={4}
                    md={6}
                    key={barber.barberId}
                >

                    <Card className="barber-card border-0">

                        <div className="barber-image-wrapper">

                            <img
    src={barberImages[index % barberImages.length]}
    alt={barber.fullName}
    className="barber-image"
/>

                        </div>

                        <Card.Body className="text-center">

                            <h4 className="fw-bold mb-2">

                                {barber.fullName}

                            </h4>

                            <span className="barber-specialization">

                                {barber.specialization}

                            </span>

                            <div className="mt-4">

                                <span
                                    className={
                                        barber.isAvailable
                                            ? "badge bg-success px-3 py-2"
                                            : "badge bg-secondary px-3 py-2"
                                    }
                                >
                                    {barber.isAvailable
                                        ? "Available Today"
                                        : "Unavailable"}

                                </span>

                            </div>

                            <Button
                                as={Link}
                                to="/register"
                                className="book-barber-btn mt-4"
                            >
                                Book This Barber
                            </Button>

                        </Card.Body>

                    </Card>

                </Col>

            ))}

        </Row>

    </Container>
</section>

            {/* ================= WHY CHOOSE US ================= */}

<section
    id="about"
    className="why-section py-5"
>
    <Container>

        <div className="section-title text-center mb-5">

            <span className="section-subtitle">
                WHY CHOOSE US
            </span>

            <h2 className="fw-bold mt-2">
                More Than Just A Haircut
            </h2>

            <p
                className="text-muted mx-auto"
                style={{ maxWidth: "650px" }}
            >
                At Director's Cut, we believe every client deserves
                premium service, modern style, and an unforgettable
                grooming experience.
            </p>

        </div>

        <Row className="g-4">

            <Col lg={3} md={6}>

                <div className="feature-card">

                    <FaCut
                        className="feature-icon"
                    />

                    <h4>
                        Premium Haircuts
                    </h4>

                    <p>
                        Modern fades, classic cuts,
                        beard styling and grooming
                        delivered with precision.
                    </p>

                </div>

            </Col>

            <Col lg={3} md={6}>

                <div className="feature-card">

                    <FaUserTie
                        className="feature-icon"
                    />

                    <h4>
                        Expert Barbers
                    </h4>

                    <p>
                        Highly trained professionals
                        with years of grooming
                        experience.
                    </p>

                </div>

            </Col>

            <Col lg={3} md={6}>

                <div className="feature-card">

                    <FaCalendarCheck
                        className="feature-icon"
                    />

                    <h4>
                        Easy Booking
                    </h4>

                    <p>
                        Reserve your appointment
                        online anytime in just
                        a few clicks.
                    </p>

                </div>

            </Col>

            <Col lg={3} md={6}>

                <div className="feature-card">

                    <FaStar
                        className="feature-icon"
                    />

                    <h4>
                        Customer Satisfaction
                    </h4>

                    <p>
                        Trusted by hundreds of
                        satisfied customers who
                        keep coming back.
                    </p>

                </div>

            </Col>

        </Row>

    </Container>
</section>

{/* ================= CONTACT ================= */}

<section
    id="contact"
    className="py-5 bg-light"
>
    <Container>

        <Row className="align-items-center">

            <Col lg={6} className="mb-4">

                <h2 className="fw-bold mb-4">
                    Visit Director's Cut
                </h2>

                <p className="text-muted">
                    Looking for a fresh haircut?
                    Visit our shop or contact us to learn more about
                    our premium grooming services.
                </p>

                <div className="mt-4">

                  <h5 className="fw-bold">
    📍 Address
</h5>

<p className="text-muted">
    Miputak, Dipolog City,<br />
    Zamboanga del Norte, Philippines
</p>

<h5 className="fw-bold">
    📞 Phone
</h5>

<p className="text-muted">
    +63 912 345 6789
</p>

<h5 className="fw-bold">
    📧 Email
</h5>

<p className="text-muted">
    directorscut@gmail.com
</p>

<h5 className="fw-bold">
    🕒 Business Hours
</h5>

<p className="text-muted">
    Monday – Sunday<br />
    9:00 AM – 7:00 PM
</p>

                </div>

            </Col>

            <Col lg={6}>

               <iframe
    title="Google Map"
    src="https://www.google.com/maps?q=Miputak,Dipolog+City,Zamboanga+del+Norte&output=embed"
    width="100%"
    height="350"
    style={{
        border: 0,
        borderRadius: "12px"
    }}
    allowFullScreen=""
    loading="lazy"
/>

            </Col>

        </Row>

    </Container>

</section>

{/* ================= FOOTER ================= */}

<footer
    className="bg-dark text-white py-4"
>
    <Container>

        <Row className="align-items-center">

            <Col md={6}>

                <h4 className="text-warning fw-bold">
                    Director's Cut
                </h4>

                <small>
                    Premium Grooming & Haircuts
                </small>

            </Col>

            <Col
                md={6}
                className="text-md-end mt-3 mt-md-0"
            >

                <small>
                    © {new Date().getFullYear()} Director's Cut.
                    All Rights Reserved.
                </small>

            </Col>

        </Row>

    </Container>

</footer>

        </>
    );
}

export default LandingPage;