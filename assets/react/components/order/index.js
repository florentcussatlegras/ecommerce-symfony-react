import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import { visit } from "../../../utils";
import ShoppingCartTable from "../shoppingCart/shoppingCartTable";
import { useEffect, useState } from "react";

export default function Order({ shoppingCart, totalPrices, sessionAddresses }) {
    const createCheckoutSession = () => {
        fetch("/stripe/checkout-sessions", {
            method: "POST",
        })
            .then((response) => response.json())
            .then((json) => visit(json["url"]));
    };

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
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                marginY={5}
            >
                {"items" in shoppingCart && (
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="left"
                        gap={2}
                        width="50%"
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
                <Box
                    container
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    marginY={5}
                >
                    <Stack direction={"column"}>
                        {JSON.stringify(sessionAddresses.address_delivery)}
                    </Stack>
                </Box>
            </Box>
        </>
    );
}
