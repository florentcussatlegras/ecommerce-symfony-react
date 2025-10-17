import { useEffect, useState } from 'react';

export default function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
        .then(response => response.json())
        .then(json => setProducts(json));
    }, []);
}