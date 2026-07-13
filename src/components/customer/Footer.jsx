function Footer() {
    return (
        <footer
            style={{
                background: "#111827",
                color: "white",
                padding: "30px 0",
                textAlign: "center",
            }}
        >
            <p className="mb-0">
                © {new Date().getFullYear()} Director's Cut Barber Shop.
                All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;