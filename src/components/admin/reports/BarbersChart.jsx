import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

function BarbersChart({ barbers }) {

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

                    <BarChart data={barbers}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="barberName"
                        />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="totalAppointments"
                            fill="#198754"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default BarbersChart;