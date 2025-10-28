import { useEffect, useState } from "react";

export default function useProducts(id) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (id != undefined) {
            fetch(`/api/products/${id}`)
                .then((response) => response.json())
                .then((json) => setProducts(json));
        }
    }, [id]);

    return products;
}
