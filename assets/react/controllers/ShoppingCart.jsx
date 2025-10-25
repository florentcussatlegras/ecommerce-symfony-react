
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import Appbar from "../components/appbar";
import Footer from "../components/footer";
import AppDrawer from "../components/drawer";
import SearchBox from "../components/search";
import ShoppingCart from "../components/shoppingCart";
import { UIProvider } from "../context/ui";
import useShoppingCart from "../hooks/useShoppingCart";

export default function ShoppingCartIndex() {
    const {removeItemFromShoppingCart, shoppingCart} = useShoppingCart();

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
                    <ShoppingCart removeItemFromShoppingCart={removeItemFromShoppingCart} shoppingCart={shoppingCart} />
                    <Footer />
                    <AppDrawer />
                    <SearchBox />
                </UIProvider>
            </Container>
        </ThemeProvider>
    );
}