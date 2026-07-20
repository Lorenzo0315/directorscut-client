import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

function ServicesChart({ services }) {

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
                            left: 40
                        }}
                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            type="number"
                        />

                        <YAxis
                            type="category"
                            dataKey="serviceName"
                            width={160}
                        />

                        <Tooltip />

                        <Bar
                            dataKey="totalBookings"
                            fill="#d4af37"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default ServicesChart;