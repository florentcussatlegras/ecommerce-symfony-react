import { useTheme } from "@mui/material/styles";
import { Grid, useMediaQuery } from "@mui/material";
import useProducts from "../../hooks/useProducts";

export default function Products() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const products = useProducts();

    const renderProducts = products.map((product) => (
        <Grid item key={product.id} display="flex" flexDirection={"column"} alignItems="center">
            
        </Grid>
    ));

    return (
        <Container>
            <Grid
                container
                justifyContent={"center"}
                sx={{margin: '20px 4px 10px 4px'}}
            >
                {renderProducts}
            </Grid>
        </Container>
    )
}