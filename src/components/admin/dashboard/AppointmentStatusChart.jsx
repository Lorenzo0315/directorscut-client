import { Card } from "react-bootstrap";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

const COLORS = [
    "#F59E0B", // Pending
    "#3B82F6", // Confirmed
    "#10B981", // Completed
    "#EF4444"  // Cancelled
];

function AppointmentStatusChart({ dashboard }) {

    const chartData = [
        {
            status: "Pending",
            count: dashboard?.pendingAppointments ?? 0
        },
        {
            status: "Confirmed",
            count: dashboard?.confirmedAppointments ?? 0
        },
        {
            status: "Completed",
            count: dashboard?.completedAppointments ?? 0
        },
        {
            status: "Cancelled",
            count: dashboard?.cancelledAppointments ?? 0
        }
    ];

    return (
        <Card
            className="border-0 shadow-sm h-100"
            style={{
                borderRadius: "18px"
            }}
        >
            <Card.Body>

                <h5 className="fw-bold mb-4">
                    Appointment Status
                </h5>

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <PieChart>

                        <Pie
                            data={chartData}
                            dataKey="count"
                            nameKey="status"
                            cx="50%"
                            cy="50%"
                            innerRadius={65}
                            outerRadius={105}
                            paddingAngle={4}
                            label={({ status, count }) => `${status}: ${count}`}
                        >

                            {chartData.map((entry, index) => (

                                <Cell
                                    key={entry.status}
                                    fill={COLORS[index]}
                                />

                            ))}

                        </Pie>

                        <Tooltip
                            formatter={(value) => [`${value}`, "Appointments"]}
                        />

                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            iconType="circle"
                        />

                    </PieChart>

                </ResponsiveContainer>

            </Card.Body>

        </Card>
    );
}

export default AppointmentStatusChart;