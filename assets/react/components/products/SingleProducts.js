import { Stack } from "@mui/material";
import {
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    ProductAddToCart,
    ProductFavButton,
    ProductImage,
} from "../../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDetail";

export default function SingleProducts({ product, matches, addItemToShoppingCart, shoppingCart }) {
    const [
        ProductDetailDialog,
        showProductDetailDialog,
        closeProductDetailDialog,
    ] = useDialogModal(ProductDetail);

    return (
        <>
            <Product>
                <ProductImage src={"/images/products/" + product.imageName} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction="row">
                        {/* <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton> */}
                        <ProductActionButton
                            onClick={() => showProductDetailDialog()}
                        >
                            <FitScreenIcon color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductAddToCart variant="contained" onClick={() => addItemToShoppingCart(product)}>Ajouter au panier</ProductAddToCart>
            <ProductDetailDialog product={product} />
        </>
    );
}
