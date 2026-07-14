import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { getServices } from "../../services/serviceService";

import LoadingSpinner from "../../components/ui/LoadingSpinner";
import ServiceGrid from "../../components/customer/services/ServiceGrid";
import ServiceSearch from "../../components/customer/services/ServiceSearch";
import ServiceEmpty from "../../components/customer/services/ServiceEmpty";

function Services() {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const fetchServices = async () => {

            try {

                const data = await getServices();

                setServices(data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        fetchServices();

    }, []);

    const filteredServices = services.filter(service =>
        service.serviceName
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <Container className="py-5">

            <h1 className="fw-bold mb-3">
                Our Services
            </h1>

            <p className="text-muted mb-4">
                Choose the grooming service that's right for you.
            </p>

            <ServiceSearch
                search={search}
                setSearch={setSearch}
            />

            {loading ? (

                <LoadingSpinner />

            ) : filteredServices.length === 0 ? (

                <ServiceEmpty />

            ) : (

                <ServiceGrid services={filteredServices} />

            )}

        </Container>
    );
}

export default Services;