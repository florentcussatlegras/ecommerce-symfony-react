import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useEffect, useState } from "react";
import theme from "../../styles/theme";
import Appbar from "../components/appbar";
import Footer from "../components/footer";
import AppDrawer from "../components/drawer";
import SearchBox from "../components/search";
import { UIProvider } from "../context/ui";
import useShoppingCart from "../hooks/useShoppingCart";

const Layout = ({ children }) => {
    useEffect(() => {
        document.title = "React Material UI - Home";
    }, []);

    const { shoppingCart } = useShoppingCart();

    return (
        <ThemeProvider theme={theme}>
            <UIProvider>
                <Appbar shoppingCart={shoppingCart} />
                {children}
                <Footer />
                <AppDrawer />
                <SearchBox />
            </UIProvider>
        </ThemeProvider>
    );
};

export default Layout;
