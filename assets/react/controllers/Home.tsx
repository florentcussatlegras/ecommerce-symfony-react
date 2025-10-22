import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useEffect } from "react";
import theme from "../../styles/theme";
import Appbar from "../components/appbar";
import Banner from "../components/banner";
import Promotions from "../components/promotions";
import Products from "../components/products";

export default function Home() {
    useEffect(() => {
        document.title = "React Material UI - Home";
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth="xl"
                sx={{
                    background: "#fff",
                }}
            >
                <Appbar />
                <Banner />
                <Promotions />
                <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
                    <Typography variant="h4">Our Products</Typography>
                </Box>
                <Products />
            </Container>
        </ThemeProvider>
    );
}
