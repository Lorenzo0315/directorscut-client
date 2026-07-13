import { Table, Container } from "react-bootstrap";

function MyAppointments() {
    return (
        <Container>

            <h2 className="page-title">
                My Appointments
            </h2>

            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Barber</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>Haircut</td>
                        <td>John Doe</td>
                        <td>June 20</td>
                        <td>Pending</td>
                    </tr>

                </tbody>

            </Table>

        </Container>
    );
}

export default MyAppointments;