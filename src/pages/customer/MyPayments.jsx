import { Container, Table } from "react-bootstrap";

function MyPayments() {
    return (
        <Container>

            <h2 className="page-title">
                Payment History
            </h2>

            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Method</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>₱200</td>
                        <td>Cash</td>
                        <td>Paid</td>
                    </tr>

                </tbody>

            </Table>

        </Container>
    );
}

export default MyPayments;