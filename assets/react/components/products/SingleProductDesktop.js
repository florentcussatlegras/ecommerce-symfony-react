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
import { useState } from "react";

export default function SingleProductDesktop({ product, matches, addItemToShoppingCart, shoppingCart }) {
    const [showOptions, setShowOptions] = useState(false);
    const [
        ProductDetailDialog,
        showProductDetailDialog,
        closeProductDetailDialog,
    ] = useDialogModal(ProductDetail);

    const handleMouseEnter = () => {
        setShowOptions(true);
    };

    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    return (
        <>
            <Product
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ProductImage src={"/images/products/" + product.imageName} />
                {/* <ProductFavButton isFav={0}>
                    <FavoriteIcon />
                </ProductFavButton> */}

                {showOptions && (
                    <ProductAddToCart show={showOptions} variant="outlined" onClick={() => addItemToShoppingCart(product)}>
                        Add to Cart
                    </ProductAddToCart>
                )}

                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction="row">
                        {/* <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton> */}
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton
                            onClick={() => showProductDetailDialog()}
                        >
                            <FitScreenIcon color="primary" />
                        </ProductActionButton>
                    </Stack> 
                </ProductActionsWrapper>
            </Product>
            <ProductDetailDialog product={product} />
        </>
    );
}
