import ShoppingCart from "../components/shoppingCart";
import useShoppingCart from "../hooks/useShoppingCart";
import Layout from "./Layout";

export default function ShoppingCartIndex() {
    const { removeItemFromShoppingCart, shoppingCart, totalPrices } = useShoppingCart();

    return (
        <Layout>
            <ShoppingCart
                removeItemFromShoppingCart={removeItemFromShoppingCart}
                shoppingCart={shoppingCart}
                totalPrices={totalPrices}
            />
        </Layout>
    );
}
