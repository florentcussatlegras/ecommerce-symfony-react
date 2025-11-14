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
import ShoppingCart from "../components/shoppingCart";

export default function ShoppingCartIndex() {
    const { removeItemFromShoppingCart, shoppingCart, totalPrices } =
        useShoppingCart();

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
                    <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
                        <Typography variant="h4">Mon panier</Typography>
                    </Box>
                    <ShoppingCart
                        removeItemFromShoppingCart={removeItemFromShoppingCart}
                        shoppingCart={shoppingCart}
                        totalPrices={totalPrices}
                    />
                    <Footer />
                    <AppDrawer />
                    <SearchBox />
                </UIProvider>
            </Container>
        </ThemeProvider>
    );
}
