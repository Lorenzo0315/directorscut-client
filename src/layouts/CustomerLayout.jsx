import { Outlet } from "react-router-dom";
import CustomerNavbar from "../components/layout/CustomerNavbar";

function CustomerLayout() {
    return (
        <>
            <CustomerNavbar />
            <Outlet />
        </>
    );
}

export default CustomerLayout;