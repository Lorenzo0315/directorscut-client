import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Spinner,
    Alert,
    Button
} from "react-bootstrap";

import RevenueCards from "../../components/admin/reports/RevenueCards";
import RevenueChart from "../../components/admin/reports/RevenueChart";
import ServicesChart from "../../components/admin/reports/ServicesChart";
import BarbersChart from "../../components/admin/reports/BarbersChart";
import MonthlyChart from "../../components/admin/reports/MonthlyChart";

import {
    getRevenueReport,
    getPopularServices,
    getTopBarbers,
    getMonthlyAppointments
} from "../../services/reportService";

import { exportReportPDF } from "../../utils/reportPdf";

function Reports() {

    const [revenue, setRevenue] = useState(null);
    const [popularServices, setPopularServices] = useState([]);
    const [topBarbers, setTopBarbers] = useState([]);
    const [monthlyAppointments, setMonthlyAppointments] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadReports();
    }, []);

    const loadReports = async () => {

        try {

            const [
                revenueData,
                servicesData,
                barbersData,
                appointmentsData
            ] = await Promise.all([
                getRevenueReport(),
                getPopularServices(),
                getTopBarbers(),
                getMonthlyAppointments()
            ]);

            setRevenue(revenueData);
            setPopularServices(servicesData);
            setTopBarbers(barbersData);
            setMonthlyAppointments(appointmentsData);

        }
        catch (err) {

            console.error(err);
            setError("Failed to load reports.");

        }
        finally {

            setLoading(false);

        }

    };

    const handleExportPDF = () => {

        exportReportPDF(
            revenue,
            popularServices,
            topBarbers,
            monthlyAppointments
        );

    };

    if (loading) {

        return (
            <div className="text-center mt-5">
                <Spinner animation="border" />
            </div>
        );

    }

    return (

        <Container fluid>

            <Row className="align-items-center mb-4">

                <Col>

                    <h2>
                        Reports
                    </h2>

                </Col>

                <Col className="text-end">

                    <Button
                        variant="danger"
                        onClick={handleExportPDF}
                    >
                        Export PDF
                    </Button>

                </Col>

            </Row>

            {error && (

                <Alert variant="danger">
                    {error}
                </Alert>

            )}

            {/* Revenue Summary */}
            <RevenueCards revenue={revenue} />

            {/* Revenue Chart */}
            <Row className="mt-4">

                <Col>

                    <RevenueChart
                        revenue={revenue}
                    />

                </Col>

            </Row>

            {/* Charts */}
            <Row className="mt-4">

                <Col lg={6} className="mb-4">

                    <ServicesChart
                        services={popularServices}
                    />

                </Col>

                <Col lg={6} className="mb-4">

                    <BarbersChart
                        barbers={topBarbers}
                    />

                </Col>

            </Row>

            {/* Monthly Appointments */}
            <Row>

                <Col>

                    <MonthlyChart
                        appointments={monthlyAppointments}
                    />

                </Col>

            </Row>

        </Container>

    );

}

export default Reports;