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
import Layout from "./Layout";

export default function Home() {
    useEffect(() => {
        document.title = "React Material UI - Home";
    }, []);

    return (
        <Layout>
            <Banner />
            <Promotions />
        </Layout>
    );
}
