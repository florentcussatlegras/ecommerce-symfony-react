import { Box, Grid, Typography, Button } from "@mui/material";
import ShoppingCartTable from "./shoppingCartTable";
import { visit } from "../../../utils";

export default function ShoppingCart({
    removeItemFromShoppingCart,
    shoppingCart,
    totalPrices
}) {
    const createCheckoutSession = () => {
        fetch("/stripe/checkout-sessions", {
            method: "POST",
        })
            .then(response => response.json())
            .then(json => visit(json["url"]));
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
                        <Typography variant="h5">Mon panier</Typography>
                    </Grid>
                    <Grid>
                        {/* <Button variant="contained" color="primary" onClick={createCheckoutSession}> */}
                        <Button variant="contained" color="primary" onClick={() => visit('/delivery')}>
                            Valider mon panier
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <ShoppingCartTable
                removeItemFromShoppingCart={removeItemFromShoppingCart}
                shoppingCart={shoppingCart}
                totalPrices={totalPrices}
            />
        </>
    );
}
