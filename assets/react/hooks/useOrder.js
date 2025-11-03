import { useEffect, useState } from "react";

export default function useOrder() {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        fetch("/api/addresses")
            .then((response) => response.json())
            .then((json) => setAddresses(json));
    }, []);

    return addresses;
}
