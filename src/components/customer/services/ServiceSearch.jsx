import { Form } from "react-bootstrap";

function ServiceSearch({ search, setSearch }) {
    return (
        <Form.Control
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4"
        />
    );
}

export default ServiceSearch;