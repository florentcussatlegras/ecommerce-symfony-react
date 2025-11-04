import { useEffect, useState } from "react";

export default function useShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [totalPrices, setTotalPrices] = useState(0);
    const [loading, setLoading] = useState(false);

    const addItemToShoppingCart = (product) => {
        setLoading(true);
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

        fetch("/session/shopping-cart/total-prices")
            .then((response) => response.json())
            .then((json) => setTotalPrices(json))
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

        fetch("/session/shopping-cart/total-prices")
            .then((response) => response.json())
            .then((json) => setTotalPrices(json))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        addItemToShoppingCart,
        removeItemFromShoppingCart,
        shoppingCart,
        totalPrices,
        loading,
    };
}
