import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";

import "./styles/globals.css";
import "./styles/components.css";

import "./styles/customer.css";
import "./styles/about.css";
import "./styles/featured-services.css";
import "./styles/why-choose.css";
import "./styles/testimonials.css";
import "./styles/cta.css";
import "./styles/footer.css";
import "./styles/services-page.css";
import "./styles/barbers-page.css";
import "./styles/book-appointment.css";
import "./styles/my-appointments.css";
import "./styles/admin-dashboard.css";

import "./styles/auth.css";
import "./styles/staff.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);