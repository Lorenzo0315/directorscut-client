import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

function RevenueChart({ report }) {

    const summary = report?.revenueSummary ?? {};

    const data = [
        {
            period: "Today",
            amount: summary.todayRevenue ?? 0
        },
        {
            period: "Week",
            amount: summary.thisWeekRevenue ?? 0
        },
        {
            period: "Month",
            amount: summary.thisMonthRevenue ?? 0
        },
        {
            period: "Year",
            amount: summary.thisYearRevenue ?? 0
        }
    ];

    return (
        <div className="card shadow-sm mb-4">

            <div className="card-header">
                <h5 className="mb-0">
                    Revenue Overview
                </h5>
            </div>

            <div className="card-body">

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >

                    <BarChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="period" />

                        <YAxis />

                        <Tooltip
                            formatter={(value) => [
                                `₱${Number(value).toLocaleString()}`,
                                "Revenue"
                            ]}
                        />

                        <Bar
                            dataKey="amount"
                            fill="#d4af37"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default RevenueChart;