
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

export default function Profile() {
    const {shoppingCart} = useShoppingCart();

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
                        <Typography variant="h4">Mon profil</Typography>
                    </Box>
                    <Footer />
                    <AppDrawer />
                    <SearchBox />
                </UIProvider>
            </Container>
        </ThemeProvider>
    );
}