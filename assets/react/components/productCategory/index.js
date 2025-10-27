import { useTheme } from "@mui/material/styles";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import useProductCategories from "../../hooks/useProductCategories";
import { ProductImage } from "../../../styles/products";

export default function ProductCategory() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const productCategories = useProductCategories();

    const renderProductCategories = productCategories.map((productCategory) => (
        <Grid
            key={productCategory.id}
            size={{ xs: 1, md: 2, xl: 3 }}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
        >
            {productCategory.name}
            {/* <ProductImage src={"/images/products/" + productCategory.imageName} /> */}
            {/* {matches ? (
                <SingleProduct product={product} matches={matches} addItemToShoppingCart={addItemToShoppingCart} shoppingCart={shoppingCart} />
            ) : (
                <SingleProductDesktop product={product} matches={matches} addItemToShoppingCart={addItemToShoppingCart} shoppingCart={shoppingCart} />
            )} */}
        </Grid>
    ));

    return (
        <Grid
            container
            spacing={{ xs: 2, lg: 6 }}
            justifyContent={"left"}
            sx={{ margin: "10px 4px 10px 4px" }}
            columns={{ xs: 1, md: 4, xl: 12 }}
        >
            {renderProductCategories}
        </Grid>
    );
}
