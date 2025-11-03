import Order from "../components/order";
import Layout from "./Layout";
import useShoppingCart from "../hooks/useShoppingCart";

export default function OrderIndex() {


    return (
        <Layout>
            <Order
                // shoppingCart={shoppingCart}
                // totalPrices={totalPrices}
                // sessionAddresses={sessionAddresses}
            />
        </Layout>
    );
}
