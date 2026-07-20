import { Card, Table } from "react-bootstrap";

function MonthlyAppointmentsTable({ appointments }) {

    return (

        <Card className="shadow-sm">

            <Card.Header>

                <h5 className="mb-0">
                    Monthly Appointments
                </h5>

            </Card.Header>

            <Card.Body>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>Month</th>
                            <th>Total Appointments</th>

                        </tr>

                    </thead>

                    <tbody>

                        {appointments?.length > 0 ? (

                            appointments.map((item, index) => (

                                <tr key={index}>

                                    <td>
                                        {item.month}
                                    </td>

                                    <td>
                                        {item.totalAppointments}
                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="2"
                                    className="text-center"
                                >

                                    No data available.

                                </td>

                            </tr>

                        )}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

}

export default MonthlyAppointmentsTable;