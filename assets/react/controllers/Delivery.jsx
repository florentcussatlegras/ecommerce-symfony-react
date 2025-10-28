import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useEffect } from "react";
import theme from "../../styles/theme";
import Appbar from "../components/appbar";
import Banner from "../components/banner";
import Promotions from "../components/promotions";
import Products from "../components/products";
import ProductCategory from "../components/productCategory";
import Footer from "../components/footer";
import AppDrawer from "../components/drawer";
import SearchBox from "../components/search";
import { UIProvider } from "../context/ui";
import useShoppingCart from "../hooks/useShoppingCart";
import DeliveryAddress from "../components/delivery";

export default function Delivery() {
    useEffect(() => {
        document.title = "React Material UI - Home";
    }, []);

    const {addItemToShoppingCart, shoppingCart} = useShoppingCart();

    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth="xl"
                sx={{
                    background: "#fff",
                }}
            >
                <UIProvider>
                    <Appbar shoppingCart={shoppingCart} />
                    <DeliveryAddress />
                    <Footer />
                    <AppDrawer />
                    <SearchBox />
                </UIProvider>
            </Container>
        </ThemeProvider>
    );
}