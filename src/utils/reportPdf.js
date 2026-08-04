import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportReportPDF = (
    report,
    startDate = null,
    endDate = null
) => {

    if (!report) return;

    const doc = new jsPDF();

    const summary = report.revenueSummary ?? {};

    // =========================
    // Header
    // =========================

    doc.setFontSize(20);
    doc.text("Director's Cut Barber Shop", 14, 20);

    doc.setFontSize(14);
    doc.text("Business Report", 14, 30);

    doc.setFontSize(10);

    doc.text(
        `Generated: ${new Date().toLocaleString()}`,
        14,
        38
    );

    let rangeText = "All Records";

    if (startDate && endDate) {

        rangeText = `${startDate} - ${endDate}`;

    }
    else if (startDate) {

        rangeText = `From ${startDate}`;

    }
    else if (endDate) {

        rangeText = `Until ${endDate}`;

    }

    doc.text(
        `Report Range: ${rangeText}`,
        14,
        44
    );

    // =========================
    // Revenue Summary
    // =========================

    doc.setFontSize(14);
    doc.text("Revenue Summary", 14, 56);

    autoTable(doc, {
        startY: 61,
        head: [["Category", "Amount"]],
        body: [
            [
                "Today",
                `PHP ${Number(summary.todayRevenue ?? 0).toFixed(2)}`
            ],
            [
                "This Week",
                `PHP ${Number(summary.thisWeekRevenue ?? 0).toFixed(2)}`
            ],
            [
                "This Month",
                `PHP ${Number(summary.thisMonthRevenue ?? 0).toFixed(2)}`
            ],
            [
                "This Year",
                `PHP ${Number(summary.thisYearRevenue ?? 0).toFixed(2)}`
            ],
            [
                "Total Revenue",
                `PHP ${Number(summary.totalRevenue ?? 0).toFixed(2)}`
            ],
            [
                "Total Appointments",
                report.totalAppointments ?? 0
            ],
            [
                "Total Customers",
                report.totalCustomers ?? 0
            ]
        ],
        theme: "striped",
        headStyles: {
            fillColor: [52, 133, 191]
        }
    });

    // =========================
    // Popular Services
    // =========================

    if (report.popularServices?.length > 0) {

        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 10,
            head: [["Popular Service", "Bookings"]],
            body: report.popularServices.map(service => [
                service.serviceName,
                service.totalBookings
            ]),
            theme: "striped",
            headStyles: {
                fillColor: [52, 133, 191]
            }
        });

    }

    // =========================
    // Top Barbers
    // =========================

    if (report.topBarbers?.length > 0) {

        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 10,
            head: [["Barber", "Appointments"]],
            body: report.topBarbers.map(barber => [
                barber.barberName,
                barber.totalAppointments
            ]),
            theme: "striped",
            headStyles: {
                fillColor: [52, 133, 191]
            }
        });

    }

    // =========================
    // Monthly Appointments
    // =========================

    if (report.monthlyAppointments?.length > 0) {

        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 10,
            head: [["Month", "Appointments"]],
            body: report.monthlyAppointments.map(item => [
                item.month,
                item.totalAppointments
            ]),
            theme: "striped",
            headStyles: {
                fillColor: [52, 133, 191]
            }
        });

    }

    // =========================
    // Revenue History
    // =========================

    if (report.revenueReports?.length > 0) {

        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 10,
            head: [["Date", "Customer", "Amount", "Method", "Status"]],
            body: report.revenueReports.map(item => [
                new Date(item.paymentDate).toLocaleDateString(),
                item.customerName,
                `PHP ${Number(item.amount).toFixed(2)}`,
                item.paymentMethod,
                item.paymentStatus
            ]),
            theme: "grid",
            headStyles: {
                fillColor: [52, 133, 191]
            }
        });

    }

    // =========================
    // Appointment History
    // =========================

    if (report.appointmentReports?.length > 0) {

        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 10,
            head: [[
                "Date",
                "Time",
                "Customer",
                "Barber",
                "Service",
                "Status"
            ]],
            body: report.appointmentReports.map(item => [
                new Date(item.appointmentDate).toLocaleDateString(),
                item.appointmentTime,
                item.customerName,
                item.barberName,
                item.serviceName,
                item.status
            ]),
            theme: "grid",
            headStyles: {
                fillColor: [52, 133, 191]
            }
        });

    }

    // =========================
    // Save PDF
    // =========================

    let fileName = "DirectorsCut_Report";

    if (startDate && endDate) {

        fileName += `_${startDate}_to_${endDate}`;

    }
    else if (startDate) {

        fileName += `_From_${startDate}`;

    }
    else if (endDate) {

        fileName += `_Until_${endDate}`;

    }
    else {

        fileName += "_All";

    }

    doc.save(`${fileName}.pdf`);

};