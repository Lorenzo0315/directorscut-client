import { Outlet } from "react-router-dom";

function CustomerLayout() {
    console.log("CustomerLayout rendered");

    return (
        <>
            <div
                style={{
                    background: "red",
                    color: "white",
                    padding: "20px",
                    fontSize: "30px",
                    textAlign: "center"
                }}
            >
                CUSTOMER LAYOUT
            </div>

            <Outlet />
        </>
    );
}

export default CustomerLayout;