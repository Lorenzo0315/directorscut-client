import { Card } from "react-bootstrap";
import { FaRegSun } from "react-icons/fa";

function WelcomeBanner() {

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) {
        greeting = "Good Morning";
    }
    else if (hour < 18) {
        greeting = "Good Afternoon";
    }

    const today = new Date().toLocaleDateString("en-PH", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    return (

        <Card
            className="border-0 shadow-sm mb-4"
            style={{
                borderRadius: "22px",
                background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
                overflow: "hidden"
            }}
        >

            <Card.Body className="p-4 p-lg-5">

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                       

                        <h1
                            className="mt-2 mb-2"
                            style={{
                                fontSize: "2.5rem",
                                fontWeight: "800",
                                color: "#0F172A"
                            }}
                        >
                            {greeting}, Admin 👋
                        </h1>

                        <p
                            className="mb-2"
                            style={{
                                color: "#475569",
                                fontSize: "1.05rem"
                            }}
                        >
                            Welcome back! Here's what's happening in your BarberShop today.
                        </p>

                        <small
                            style={{
                                color: "#94A3B8",
                                fontWeight: "500"
                            }}
                        >
                            📅 {today}
                        </small>

                    </div>

                    <div
                        style={{
                            width: "95px",
                            height: "95px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg,#FDE68A,#FBBF24)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0 10px 25px rgba(251,191,36,.35)"
                        }}
                    >

                        <FaRegSun
                            size={44}
                            color="#92400E"
                        />

                    </div>

                </div>

            </Card.Body>

        </Card>

    );

}

export default WelcomeBanner;