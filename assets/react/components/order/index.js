import { Box, Grid, Typography, Button } from "@mui/material";
import { visit } from "../../../utils";
import ShoppingCartTable from "../shoppingCart/shoppingCartTable";
import { useEffect, useState } from "react";

export default function Order({ shoppingCart, totalPrices }) {
    const [sessionAddresses, setSessionAddresses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/session/addresses")
            .then(response => response.json())
            .then(json => setSessionAddresses(json))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    console.log(sessionAddresses);

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
                    <Grid>
                        {/* <Button variant="contained" color="primary" onClick={createCheckoutSession}> */}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => visit("/")}
                        >
                            Procéder au paiement
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            {/* <ShoppingCartTable
                removeItemFromShoppingCart={removeItemFromShoppingCart}
                shoppingCart={shoppingCart}
            /> */}
            Récap produits
            {totalPrices}
        </>
    );
}
