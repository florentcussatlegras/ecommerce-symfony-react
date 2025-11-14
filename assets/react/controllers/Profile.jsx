import {
    Box,
    Grid,
    Container,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Divider,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme, { Colors } from "../../styles/theme";
import Appbar from "../components/appbar";
import Footer from "../components/footer";
import AppDrawer from "../components/drawer";
import SearchBox from "../components/search";
import ShoppingCart from "../components/shoppingCart";
import { UIProvider } from "../context/ui";
import useShoppingCart from "../hooks/useShoppingCart";
import { useEffect, useState } from "react";

export default function Profile() {
    const { shoppingCart } = useShoppingCart();
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch("/api/order/list")
            .then((response) => response.json())
            .then((json) => setOrders(json))
            .finally(() => setLoading(false));
    }, []);

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
                    <Box marginBottom={5} display="flex" flexDirection="column">
                        <Typography variant="h5">Mes commandes</Typography>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    gap={2}
                                    marginY={2}
                                >
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="space-between"
                                        gap={2}
                                        fontSize="14px"
                                    >
                                        <Box display="flex" gap={4}>
                                            <span>Réf. {order.reference}</span>
                                            <span>Total: {order.totalPrice / 100} € TTC </span>
                                        </Box>
                                        <span>
                                            {new Intl.DateTimeFormat("fr-FR", {
                                                dateStyle: "medium",
                                            }).format(
                                                new Date(order.createdAt)
                                            )}
                                        </span>
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        gap={2}
                                    >
                                        <TableContainer>
                                            <Table>
                                                <TableBody>
                                                    {order.products.map(
                                                        (item) => (
                                                            <TableRow
                                                                key={
                                                                    item.product
                                                                        .id
                                                                }
                                                            >
                                                                <TableCell>
                                                                    <Box
                                                                        display="flex"
                                                                        flexDirection="row"
                                                                        alignItems="center"
                                                                        gap={2}
                                                                    >
                                                                        <img
                                                                            width={
                                                                                100
                                                                            }
                                                                            height={
                                                                                100
                                                                            }
                                                                            src={
                                                                                "/images/products/" +
                                                                                item
                                                                                    .product
                                                                                    .imageName
                                                                            }
                                                                            lat={
                                                                                item
                                                                                    .product
                                                                                    .name
                                                                            }
                                                                        />{" "}
                                                                        {
                                                                            item
                                                                                .product
                                                                                .name
                                                                        }
                                                                    </Box>
                                                                </TableCell>
                                                                <TableCell>
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </TableCell>
                                                                <TableCell>
                                                                    {item
                                                                        .product
                                                                        .price /
                                                                        100}{" "}
                                                                    €
                                                                </TableCell>
                                                            </TableRow>
                                                        )
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>{" "}
                                    </Box>
                                </Box>
                            ))
                        ) : (
                            <Typography variant="h6" marginY={5}>
                                Vous n'avez aucune commande
                            </Typography>
                        )}
                    </Box>
                    <Footer />
                    <AppDrawer />
                    <SearchBox />
                </UIProvider>
            </Container>
        </ThemeProvider>
    );
}
