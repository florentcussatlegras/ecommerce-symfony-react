import { Box, Grid, Typography, Button } from "@mui/material";
import ShoppingCartTable from "./shoppingCartTable";
import { visit } from "../../../utils";

export default function ShoppingCart({
    removeItemFromShoppingCart,
    shoppingCart,
    totalPrices,
}) {
    console.log(shoppingCart);
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
                    {shoppingCart.items != undefined && shoppingCart.items.length > 0 && (
                        <Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => visit("/delivery")}
                            >
                                Valider mon panier
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </Box>
            {shoppingCart.items != undefined && shoppingCart.items.length > 0 ? (
                <ShoppingCartTable
                    removeItemFromShoppingCart={removeItemFromShoppingCart}
                    shoppingCart={shoppingCart}
                    totalPrices={totalPrices}
                />
            ) : (
                <Typography variant="h6" marginY={5}>
                    Votre panier est vide
                </Typography>
            )}
        </>
    );
}
