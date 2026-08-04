import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

function ServicesChart({ services = [] }) {

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-header">

                <h5 className="mb-0">
                    Most Popular Services
                </h5>

            </div>

            <div className="card-body">

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <BarChart
                        data={services}
                        layout="vertical"
                        margin={{
                            top: 10,
                            right: 20,
                            left: 40,
                            bottom: 10
                        }}
                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis type="number" />

                        <YAxis
                            type="category"
                            dataKey="serviceName"
                            width={170}
                        />

                        <Tooltip
                            formatter={(value) => [
                                `${value} Bookings`,
                                "Total"
                            ]}
                        />

                        <Bar
                            dataKey="totalBookings"
                            fill="#d4af37"
                            radius={[0, 6, 6, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default ServicesChart;