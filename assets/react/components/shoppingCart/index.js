import { Box, Grid, Typography, Button } from "@mui/material";
import ShoppingCartTable from "./shoppingCartTable";
import { visit } from "../../../utils";

export default function ShoppingCart({
    removeItemFromShoppingCart,
    shoppingCart,
    totalPrices,
}) {

    return (
        <>
            <Box marginY={5}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
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
                <Typography variant="h6" marginTop={10} marginBottom={40}>
                    Votre panier est vide
                </Typography>
            )}
        </>
    );
}
