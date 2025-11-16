import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import { visit } from "../../../utils";
import ShoppingCartTable from "../shoppingCart/shoppingCartTable";
import { useEffect, useState } from "react";
import useShoppingCart from "../../hooks/useShoppingCart";
import useSessionAddresses from "../../hooks/useSessionAddresses";

export default function Order() {
    const { shoppingCart, totalPrices } = useShoppingCart();
    const [addresses, setAddresses] = useState([]);

    const createCheckoutSession = () => {
        fetch("/stripe/checkout-sessions", {
            method: "POST",
        })
            .then((response) => response.json())
            .then((json) => visit(json["url"]));
    };

    useEffect(() => {
        fetch("/session/addresses")
            .then((response) => response.json())
            .then((json) => setAddresses(json));
    }, []);

    return (
        <>
            <Box marginY={5}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid>
                        <Typography variant="h5">
                            Récapitulatif de ma commande
                        </Typography>
                    </Grid>
                    <Grid
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap={2}
                    >
                        <Box>{totalPrices / 100} € TTC</Box>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={createCheckoutSession}
                        >
                            Procéder au paiement
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box
                container
                display="flex"
                justifyContent="space-between"
                marginY={5}
                sx={{
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Box
                    container
                    sx={{
                        width: { xs: "100%", md: "60%" },
                    }}
                >
                    {"items" in shoppingCart && (
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="left"
                            gap={2}
                        >
                            {shoppingCart.items.map((item) => (
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    gap={10}
                                >
                                    <img
                                        width={100}
                                        height={100}
                                        src={
                                            "/images/products/" +
                                            item.product.imageName
                                        }
                                        lat={item.product.name}
                                    />{" "}
                                    <span>{item.product.name}</span>
                                    <span>{item.quantity}</span>
                                    <span>{item.product.price / 100} €</span>
                                </Box>
                            ))}
                        </Box>
                    )}
                    <Button
                            variant="contained"
                            color="primary"
                            onClick={() => visit("/")}
                            sx={{
                                width: { xs: "75%", md: "250px" },
                                marginTop: "20px"
                            }}
                        >
                            Continuer mes achats
                        </Button>
                </Box>
                <Box
                    container
                    sx={{
                        width: { xs: "100%", md: "40%" },
                        marginTop: { xs: "20px", md: "0px" }
                    }}
                >
                    <Stack spacing={4}>
                        <Box>
                            <Typography variant="h5">
                                Adresse de livraison
                            </Typography>
                            {addresses.address_delivery != undefined && (
                                <Stack>
                                    <div>
                                        <span>
                                            {
                                                addresses.address_delivery
                                                    .firstname
                                            }
                                        </span>
                                        {" "}
                                        <span>
                                            {
                                                addresses.address_delivery
                                                    .lastname
                                            }
                                        </span>
                                    </div>
                                    <div>
                                        {addresses.address_delivery.address}
                                    </div>
                                    <div>
                                        {addresses.address_delivery.zipCode}
                                    </div>
                                    <div>{addresses.address_delivery.city}</div>
                                </Stack>
                            )}
                        </Box>
                        <Box>
                            <Typography variant="h5">
                                Adresse de facturation
                            </Typography>
                            {addresses.address_billing != undefined && (
                                <Stack>
                                    <div>
                                        <span>
                                            {
                                                addresses.address_billing
                                                    .firstname
                                            }
                                        </span>
                                        {" "}
                                        <span>
                                            {addresses.address_billing.lastname}
                                        </span>
                                    </div>
                                    <div>
                                        {addresses.address_billing.address}
                                    </div>
                                    <div>
                                        {addresses.address_billing.zipCode}
                                    </div>
                                    <div>{addresses.address_billing.city}</div>
                                </Stack>
                            )}
                        </Box>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => visit("/delivery")}
                            sx={{
                                width: { xs: "75%", md: "50%" },
                            }}
                        >
                            Modifier les adresses
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}
