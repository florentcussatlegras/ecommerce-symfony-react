import { useEffect, useState } from "react";

export default function useProductCategories(id) {
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        if (id == undefined) {
            fetch("/api/product-categories")
                .then((response) => response.json())
                .then((json) => setProductCategories(json));
        } else {
            fetch(`/api/product-category/${id}`)
                .then((response) => response.json())
                .then((json) => setProductCategories(json));
        }
    }, []);

    return productCategories;
}
