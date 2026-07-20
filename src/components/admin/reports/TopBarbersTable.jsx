import { Card, Table } from "react-bootstrap";

function TopBarbersTable({ barbers }) {

    return (

        <Card className="shadow-sm">

            <Card.Header>

                <h5 className="mb-0">
                    Top Performing Barbers
                </h5>

            </Card.Header>

            <Card.Body>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>#</th>
                            <th>Barber</th>
                            <th>Total Appointments</th>

                        </tr>

                    </thead>

                    <tbody>

                        {barbers?.length > 0 ? (

                            barbers.map((barber, index) => (

                                <tr key={index}>

                                    <td>{index + 1}</td>

                                    <td>
                                        {barber.barberName}
                                    </td>

                                    <td>
                                        {barber.totalAppointments}
                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="3"
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

export default TopBarbersTable;