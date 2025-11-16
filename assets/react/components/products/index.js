import { useTheme } from "@mui/material/styles";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import useProducts from "../../hooks/useProducts";
import SingleProduct from "./SingleProducts";
import SingleProductDesktop from "./SingleProductDesktop";

export default function Products({
    search,
    addItemToShoppingCart,
    shoppingCart,
    category,
    products,
}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    let items;

    if (search == 0) {
        items = useProducts(category.id);
    } else {
        items = JSON.parse(products);
    }

    const renderProducts = items.map((product) => (
        <Grid
            item
            key={product.id}
            size={{ xs: 12, md: 6, xl: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            {matches ? (
                <SingleProduct
                    product={product}
                    matches={matches}
                    addItemToShoppingCart={addItemToShoppingCart}
                    shoppingCart={shoppingCart}
                />
            ) : (
                <SingleProductDesktop
                    product={product}
                    matches={matches}
                    addItemToShoppingCart={addItemToShoppingCart}
                    shoppingCart={shoppingCart}
                />
            )}
        </Grid>
    ));

    return (
        <>
            <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
                {category != undefined ? (
                    <Typography variant="h4">{category.name}</Typography>
                ) : (
                    <Typography variant="h4">Résultats recherche</Typography>
                )}
            </Box>
            <Grid
                container
                spacing={{ xs: 2, md: 6 }}
                sx={{ margin: "10px 0 40px 0" }}
            >
                {items != undefined && items.length > 0
                    ? renderProducts
                    : search == 1 && (
                          <Typography variant="h5" marginY={5}>
                              Aucun produits trouvés
                          </Typography>
                      )}
            </Grid>
        </>

        // <Grid container spacing={2}>
        //     <Grid size={8}>
        //         FOO
        //     </Grid>
        //     <Grid size={4}>
        //         FOO
        //     </Grid>
        //     <Grid size={4}>
        //         FOO
        //     </Grid>
        //     <Grid size={8}>
        //         FOO
        //     </Grid>
        // </Grid>

        // <Container>
        //     <Grid container marginTop={5} columns={{ xs: 4, sm: 8, md: 12 }}>
        //         {products?.map((product) => (
        //             <Grid item key={product.id} xs={4}>
        //                 {/* <Box sx={{ width: 300, m: 2 }}>
        //                     <Box
        //                         component="img"
        //                         sx={{width: '100%', height: 'auto'}}
        //                         src={`/images/products/${product.imageName}`}
        //                     />
        //                 </Box> */}
        //                 {matches ? (
        //                     <SingleProduct
        //                         product={product}
        //                         matches={matches}
        //                     />
        //                 ) : (
        //                     <SingleProductDesktop
        //                         product={product}
        //                         matches={matches}
        //                     />
        //                 )}
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Container>
    );
}
