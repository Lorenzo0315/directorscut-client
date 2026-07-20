import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportReportPDF = (
    revenue,
    popularServices,
    topBarbers,
    monthlyAppointments
) => {

    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.text("Director's Cut", 14, 20);

    doc.setFontSize(14);
    doc.text("Business Reports", 14, 30);

    doc.setFontSize(10);
    doc.text(
        `Generated: ${new Date().toLocaleString()}`,
        14,
        38
    );

    // Revenue Summary
    doc.setFontSize(14);
    doc.text("Revenue Summary", 14, 50);

    autoTable(doc, {
        startY: 55,
        head: [["Category", "Amount"]],
        body: [
            [
                "Today",
                `PHP ${Number(revenue.todayRevenue).toFixed(2)}`
            ],
            [
                "This Week",
                `PHP ${Number(revenue.thisWeekRevenue).toFixed(2)}`
            ],
            [
                "This Month",
                `PHP ${Number(revenue.thisMonthRevenue).toFixed(2)}`
            ],
            [
                "This Year",
                `PHP ${Number(revenue.thisYearRevenue).toFixed(2)}`
            ]
        ],
        theme: "striped",
        headStyles: {
            fillColor: [52, 133, 191]
        }
    });

    // Popular Services
    autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 10,
        head: [["Most Popular Services", "Bookings"]],
        body: popularServices.map(service => [
            service.serviceName,
            service.totalBookings
        ]),
        theme: "striped",
        headStyles: {
            fillColor: [52, 133, 191]
        }
    });

    // Top Barbers
    autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 10,
        head: [["Top Performing Barbers", "Appointments"]],
        body: topBarbers.map(barber => [
            barber.barberName,
            barber.totalAppointments
        ]),
        theme: "striped",
        headStyles: {
            fillColor: [52, 133, 191]
        }
    });

    // Monthly Appointments
    autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 10,
        head: [["Month", "Appointments"]],
        body: monthlyAppointments.map(item => [
            item.month,
            item.totalAppointments
        ]),
        theme: "striped",
        headStyles: {
            fillColor: [52, 133, 191]
        }
    });

    doc.save("DirectorsCut_Report.pdf");

};