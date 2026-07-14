import { Spinner } from "react-bootstrap";

function LoadingSpinner() {
    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <Spinner
                animation="border"
                variant="dark"
            />
        </div>
    );
}

export default LoadingSpinner;