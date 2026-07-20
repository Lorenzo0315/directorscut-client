import { useEffect, useState } from "react";
import {
    Spinner,
    Alert,
    Row,
    Col
} from "react-bootstrap";

import { getDashboard } from "../../services/dashboardService";

import WelcomeBanner from "../../components/admin/dashboard/WelcomeBanner";
import DashboardCards from "../../components/admin/dashboard/DashboardCards";
import RevenueChart from "../../components/admin/dashboard/RevenueChart";
import AppointmentStatusChart from "../../components/admin/dashboard/AppointmentStatusChart";
import RecentAppointments from "../../components/admin/dashboard/RecentAppointments";
import RecentPayments from "../../components/admin/dashboard/RecentPayments";
import QuickActions from "../../components/admin/dashboard/QuickActions";

function Dashboard() {

    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const data = await getDashboard();

            setDashboard(data);

        }
        catch (err) {

            console.error(err);

            setError("Failed to load dashboard.");

        }
        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <div className="text-center mt-5">
                <Spinner animation="border" />
            </div>
        );

    }

    if (error) {

        return (
            <Alert variant="danger">
                {error}
            </Alert>
        );

    }

    // Temporary chart data until backend supports charts
    const revenueData = dashboard.revenueChart ?? [];

    const appointmentStatusData =
        dashboard.appointmentStatusChart ??
        [
            {
                status: "Pending",
                count: dashboard.pendingAppointments
            },
            {
                status: "Confirmed",
                count: dashboard.confirmedAppointments
            },
            {
                status: "Completed",
                count: dashboard.completedAppointments
            },
            {
                status: "Cancelled",
                count: dashboard.cancelledAppointments
            }
        ];

    return (

        <div className="container-fluid">

            {/* Welcome Banner */}
            <WelcomeBanner />

            {/* Quick Actions */}
            <QuickActions />

            {/* Dashboard Cards */}
            <div className="mt-4">
                <DashboardCards dashboard={dashboard} />
            </div>

            {/* Charts */}
            <Row className="mt-4">

                <Col lg={8} className="mb-4">

                    <RevenueChart
                        data={revenueData}
                    />

                </Col>

                <Col lg={4} className="mb-4">

                    <AppointmentStatusChart
                        data={appointmentStatusData}
                    />

                </Col>

            </Row>

            {/* Recent Tables */}
            <Row>

                <Col lg={6} className="mb-4">

                    <RecentAppointments
                        appointments={dashboard.recentAppointments}
                    />

                </Col>

                <Col lg={6} className="mb-4">

                    <RecentPayments
                        payments={dashboard.recentPayments}
                    />

                </Col>

            </Row>

        </div>

    );

}

export default Dashboard;