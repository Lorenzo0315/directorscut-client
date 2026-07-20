import {
    Card
} from "react-bootstrap";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

function RevenueChart({ data }) {

    return (

        <Card className="shadow-sm border-0 h-100">

            <Card.Body>

                <h5 className="fw-bold mb-4">
                    Revenue Overview
                </h5>

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >

                    <LineChart data={data}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <XAxis
                            dataKey="month"
                        />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#2563EB"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </Card.Body>

        </Card>

    );

}

export default RevenueChart;