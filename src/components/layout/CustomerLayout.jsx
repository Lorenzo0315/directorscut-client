import { Outlet } from "react-router-dom";
import CustomerNavbar from "../components/layout/CustomerNavbar";
import Footer from "../components/common/Footer";

function CustomerLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">

            <CustomerNavbar />

            <main className="container py-4 flex-grow-1">
                <Outlet />
            </main>

            <Footer />

        </div>
    );
}

export default CustomerLayout;