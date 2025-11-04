import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide,
    Typography,
    useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../../styles/theme";
import { Product, ProductImage } from "../../../styles/products";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import IncDec from "../ui";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import useShoppingCart from "../../hooks/useShoppingCart";

function SlideTransition(props) {
    return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product, addItemToShoppingCart }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Dialog
            slots={{
                transition: SlideTransition,
            }}
            variant="permanent"
            open={open}
            fullScreen
        >
            <DialogTitle
                sx={{
                    background: Colors.secondary,
                }}
            >
                <Box
                    display={"flex"}
                    alignItems="center"
                    justifyContent={"space-between"}
                >
                    {product.name}
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper
                    flexDirection={matches ? "column" : "row"}
                >
                    <Product sx={{ mr: 4, width: { xs: "100%", md: "60%", xl: "40%" } }}>
                        <img src={"/images/products/" + product.imageName} />
                    </Product>
                    <ProductDetailInfoWrapper>
                        <Typography variant="subtitle1">
                            SKU {product.reference}
                        </Typography>
                        <Typography sx={{ lineHeight: 2 }} variant="h4">
                            {product.name}
                        </Typography>
                        <Typography variant="body">
                            {product.description.replace(/<[^>]*>/g, '')}
                        </Typography>
                        <Box
                            sx={{ mt: 4 }}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            gap={2}
                        >
                            <IncDec />
                            <Button
                                variant="contained"
                                onClick={() => addItemToShoppingCart(product)}
                            >
                                Ajouter au panier
                            </Button>
                        </Box>
                        {/* <Box
                            display="flex"
                            alignItems="center"
                            sx={{ mt: 4, color: Colors.light }}
                        >
                            <FavoriteIcon sx={{ mr: 2 }} />
                            Add to wishlist
                        </Box> */}
                        <Box
                            sx={{
                                mt: 4,
                                color: Colors.light,
                            }}
                        >
                            <FacebookIcon />
                            <TwitterIcon sx={{ pl: 2 }} />
                            <InstagramIcon sx={{ pl: theme.spacing(4) }} />
                        </Box>
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    );
}
