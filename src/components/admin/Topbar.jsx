import { FaBell, FaUserCircle } from "react-icons/fa";

function Topbar() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <header className="admin-topbar">

            <div>

                <h3>
                    Dashboard
                </h3>

                

            </div>

            <div className="admin-profile">

                <FaBell
                    size={20}
                    style={{ cursor: "pointer" }}
                />

                <div className="admin-avatar">

                    <FaUserCircle size={26} />

                </div>

                <div>

                    <strong>
                        {user?.fullName || "Administrator"}
                    </strong>

                    <br />

                    <small>
                        {user?.role}
                    </small>

                </div>

            </div>

        </header>
    );
}

export default Topbar;