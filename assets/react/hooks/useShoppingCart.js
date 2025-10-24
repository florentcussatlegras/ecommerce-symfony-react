import { useEffect, useState } from "react";

export default function useShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [loading, setLoading] = useState(false);

    const addItemToShoppingCart = (product) => {
        setLoading(true);
        console.log(`/session/shopping-cart/${product.id}`);
        fetch(`/session/shopping-cart/${product.id}`, {
            method: "POST",
        })
            .then((response) => response.json())
            .then((json) => setShoppingCart(json))
            .finally(() => {
                setLoading(false);
            });
    };

    const removeItemFromShoppingCart = (product) => {
        setLoading(true);
        fetch(`/session/shopping-cart/${product.id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((json) => setShoppingCart(json))
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        setLoading(true);
        fetch("/session/shopping-cart")
            .then((response) => response.json())
            .then((json) => setShoppingCart(json))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        addItemToShoppingCart,
        removeItemFromShoppingCart,
        shoppingCart,
        loading,
    };
}
