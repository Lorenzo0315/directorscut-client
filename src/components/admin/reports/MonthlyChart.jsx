import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

function MonthlyChart({ appointments }) {

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-header">

                <h5 className="mb-0">
                    Monthly Appointments
                </h5>

            </div>

            <div className="card-body">

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <LineChart
                        data={appointments}
                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="month"
                        />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="totalAppointments"
                            stroke="#0d6efd"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default MonthlyChart;