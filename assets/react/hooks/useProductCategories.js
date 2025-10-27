import { useEffect, useState } from 'react';

export default function useProductCategories() {
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        fetch('/api/product-categories')
        .then(response => response.json())
        .then(json => setProductCategories(json));
    }, []);

    return productCategories;
}