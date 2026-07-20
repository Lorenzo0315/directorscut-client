import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

function RevenueChart({ revenue }) {

    const data = [
        {
            period: "Today",
            amount: revenue?.todayRevenue || 0
        },
        {
            period: "Week",
            amount: revenue?.thisWeekRevenue || 0
        },
        {
            period: "Month",
            amount: revenue?.thisMonthRevenue || 0
        },
        {
            period: "Year",
            amount: revenue?.thisYearRevenue || 0
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

                        <Tooltip />

                        <Bar
                            dataKey="amount"
                            fill="#d4af37"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default RevenueChart;