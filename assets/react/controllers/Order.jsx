import Order from "../components/order";
import Layout from "./Layout";
import useShoppingCart from "../hooks/useShoppingCart";

export default function OrderIndex() {
    const { shoppingCart, totalPrices } = useShoppingCart();

    return (
        <Layout>
            <Order
                shoppingCart={shoppingCart}
                totalPrices={totalPrices}
            />
        </Layout>
    );
}
