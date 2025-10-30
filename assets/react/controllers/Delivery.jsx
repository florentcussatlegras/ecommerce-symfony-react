import { useEffect } from "react";
import Delivery from "../components/delivery";
import Layout from "./Layout";

export default function DeliveryIndex() {
    useEffect(() => {
        document.title = "React Material UI - Home";
    }, []);

    return (
        <Layout>
            <Delivery />
        </Layout>
    );
}
