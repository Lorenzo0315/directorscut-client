import { Button } from "react-bootstrap";

function CallToAction() {
    return (
        <section className="py-5 text-center bg-dark text-white">
            <h2>Ready for Your Next Haircut?</h2>

            <p>
                Book your appointment today and experience premium grooming.
            </p>

            <Button variant="warning">
                Book Appointment
            </Button>
        </section>
    );
}

export default CallToAction;