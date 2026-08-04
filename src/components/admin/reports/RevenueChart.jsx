import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

function RevenueChart({ revenueReports = [] }) {

    const data = revenueReports
        .slice()
        .reverse()
        .map(item => ({
            date: new Date(item.paymentDate).toLocaleDateString(),
            revenue: item.amount
        }));

    return (
        <div className="card shadow-sm mb-4">

            <div className="card-header">
                <h5 className="mb-0">
                    Revenue History
                </h5>
            </div>

            <div className="card-body">

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <LineChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="date"
                        />

                        <YAxis />

                        <Tooltip
                            formatter={(value) => [
                                `₱${Number(value).toLocaleString()}`,
                                "Revenue"
                            ]}
                        />

                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#d4af37"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default RevenueChart;