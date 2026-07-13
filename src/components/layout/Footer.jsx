function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-dark text-white text-center py-3 mt-auto"
        >
            <small>
                © {currentYear} Director's Cut Barber Shop Management System.
                All Rights Reserved.
            </small>
        </footer>
    );
}

export default Footer;