import { Box, Grid, Typography, Button } from "@mui/material";
import ShoppingCartTable from './shoppingCartTable';

export default function ShoppingCart({
    removeItemFromShoppingCart,
    shoppingCart,
}) {
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
                        <Button variant="contained" color="primary">
                            Procéder au paiement
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <ShoppingCartTable
                removeItemFromShoppingCart={removeItemFromShoppingCart}
                shoppingCart={shoppingCart}
            />
        </>
    );
}
