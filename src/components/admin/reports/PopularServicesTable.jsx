import { Card, Table } from "react-bootstrap";

function PopularServicesTable({ services }) {

    return (

        <Card className="shadow-sm">

            <Card.Header>

                <h5 className="mb-0">
                    Most Popular Services
                </h5>

            </Card.Header>

            <Card.Body>

                <Table hover responsive>

                    <thead>

                        <tr>

                            <th>#</th>
                            <th>Service</th>
                            <th>Total Bookings</th>

                        </tr>

                    </thead>

                    <tbody>

                        {services?.length > 0 ? (

                            services.map((service, index) => (

                                <tr key={index}>

                                    <td>{index + 1}</td>

                                    <td>
                                        {service.serviceName}
                                    </td>

                                    <td>
                                        {service.totalBookings}
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

export default PopularServicesTable;