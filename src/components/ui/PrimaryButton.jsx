import Button from "react-bootstrap/Button";

function PrimaryButton({
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
            className={`primary-btn ${className}`}
        >
            {children}
        </Button>
    );
}

export default PrimaryButton;