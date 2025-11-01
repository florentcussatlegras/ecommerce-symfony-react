import { useEffect, useState } from "react";

export default function useSessionAddresses() {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        fetch("/session/addresses")
            .then((response) => response.json())
            .then((json) => setAddresses(json));
    }, []);

    return addresses;
}
