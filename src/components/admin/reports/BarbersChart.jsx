import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

function BarbersChart({ barbers = [] }) {

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-header">

                <h5 className="mb-0">
                    Top Performing Barbers
                </h5>

            </div>

            <div className="card-body">

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <BarChart
                        data={barbers}
                        margin={{
                            top: 10,
                            right: 20,
                            left: 20,
                            bottom: 20
                        }}
                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="barberName"
                        />

                        <YAxis />

                        <Tooltip
                            formatter={(value) => [
                                `${value} Appointments`,
                                "Total"
                            ]}
                        />

                        <Bar
                            dataKey="totalAppointments"
                            fill="#198754"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default BarbersChart;