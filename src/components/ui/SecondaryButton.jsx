import Button from "react-bootstrap/Button";

function SecondaryButton({
    children,
    type = "button",
    onClick,
    className = "",
    disabled = false,
}) {
    return (
        <Button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`secondary-btn ${className}`}
            variant="light"
        >
            {children}
        </Button>
    );
}

export default SecondaryButton;