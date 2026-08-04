import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Spinner,
    Alert,
    Button,
    Card
} from "react-bootstrap";

import { getReport } from "../../services/reportService";

import RevenueCards from "../../components/admin/reports/RevenueCards";
import RevenueChart from "../../components/admin/reports/RevenueChart";
import ServicesChart from "../../components/admin/reports/ServicesChart";
import BarbersChart from "../../components/admin/reports/BarbersChart";
import MonthlyChart from "../../components/admin/reports/MonthlyChart";

import ExportReportModal from "../../components/admin/reports/ExportReportModal";

import { exportReportPDF } from "../../utils/reportPdf";

function Reports() {

    const [report, setReport] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [showExportModal, setShowExportModal] = useState(false);

    useEffect(() => {

        loadReport();

    }, []);

    const loadReport = async () => {

        try {

            setLoading(true);

            const data = await getReport();

            setReport(data);

            setError("");

        }
        catch (err) {

            console.error(err);

            setError("Failed to load reports.");

        }
        finally {

            setLoading(false);

        }

    };

    const handleExportPDF = async (
        startDate,
        endDate
    ) => {

        try {

            const reportData = await getReport(
                startDate,
                endDate
            );

            exportReportPDF(
                reportData,
                startDate,
                endDate
            );

        }
        catch (err) {

            console.error(err);

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

    if (!report) {

        return (

            <Alert variant="warning">

                No report data available.

            </Alert>

        );

    }

    return (

        <Container fluid>

            {/* Header */}

            <Row className="align-items-center mb-4">

                <Col>

                    <h2 className="fw-bold">

                        Reports Dashboard

                    </h2>

                </Col>

                <Col className="text-end">

                    <Button
                        variant="danger"
                        onClick={() => setShowExportModal(true)}
                    >
                        Export PDF
                    </Button>

                </Col>

            </Row>

            {/* Dashboard Summary */}

            <Row className="g-3 mb-4">

                <Col lg={3} md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h6>Total Customers</h6>
                            <h2>{report.totalCustomers}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={3} md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h6>Total Appointments</h6>
                            <h2>{report.totalAppointments}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={3} md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h6>Total Revenue</h6>
                            <h2>₱{report.totalRevenue?.toLocaleString()}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={3} md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h6>Completed</h6>
                            <h2>{report.completedAppointments}</h2>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            {/* Revenue Summary */}

            <RevenueCards
                revenue={report.revenueSummary}
            />

            {/* Revenue History */}

            <Row className="mt-4">

                <Col>

                    <RevenueChart
                        revenueReports={report.revenueReports ?? []}
                    />

                </Col>

            </Row>

            {/* Charts */}

            <Row className="mt-4">

                <Col lg={6} className="mb-4">

                    <ServicesChart
                        services={report.popularServices ?? []}
                    />

                </Col>

                <Col lg={6} className="mb-4">

                    <BarbersChart
                        barbers={report.topBarbers ?? []}
                    />

                </Col>

            </Row>

            {/* Monthly */}

            <Row>

                <Col>

                    <MonthlyChart
                        appointments={report.monthlyAppointments ?? []}
                    />

                </Col>

            </Row>

            <ExportReportModal
                show={showExportModal}
                onClose={() => setShowExportModal(false)}
                onExport={handleExportPDF}
            />

        </Container>

    );

}

export default Reports;