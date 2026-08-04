import { useState } from "react";
import {
    Modal,
    Button,
    Form,
    Row,
    Col
} from "react-bootstrap";

function ExportReportModal({
    show,
    onClose,
    onExport
}) {

    const [reportType, setReportType] = useState("today");

    const [startDate, setStartDate] = useState("");

    const [endDate, setEndDate] = useState("");

    const handleExport = () => {

        if (reportType === "today") {

            const today = new Date()
                .toISOString()
                .split("T")[0];

            onExport(
                today,
                today
            );

        }
        else {

            onExport(
                startDate || null,
                endDate || null
            );

        }

        onClose();

    };

    return (

        <Modal
            show={show}
            onHide={onClose}
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>

                    Export Report

                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <Form.Group className="mb-4">

                    <Form.Label>

                        Report Type

                    </Form.Label>

                    <Form.Select
                        value={reportType}
                        onChange={(e) =>
                            setReportType(e.target.value)
                        }
                    >

                        <option value="today">
                            Today's Report
                        </option>

                        <option value="range">
                            Date Range
                        </option>

                    </Form.Select>

                </Form.Group>

                {reportType === "range" && (

                    <>

                        <Row>

                            <Col>

                                <Form.Group className="mb-3">

                                    <Form.Label>

                                        Start Date

                                    </Form.Label>

                                    <Form.Control
                                        type="date"
                                        value={startDate}
                                        onChange={(e) =>
                                            setStartDate(e.target.value)
                                        }
                                    />

                                </Form.Group>

                            </Col>

                        </Row>

                        <Row>

                            <Col>

                                <Form.Group>

                                    <Form.Label>

                                        End Date

                                    </Form.Label>

                                    <Form.Control
                                        type="date"
                                        value={endDate}
                                        onChange={(e) =>
                                            setEndDate(e.target.value)
                                        }
                                    />

                                </Form.Group>

                            </Col>

                        </Row>

                    </>

                )}

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="secondary"
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button
                    variant="danger"
                    onClick={handleExport}
                >
                    Export PDF
                </Button>

            </Modal.Footer>

        </Modal>

    );

}

export default ExportReportModal;