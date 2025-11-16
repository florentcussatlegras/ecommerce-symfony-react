import { styled } from "@mui/system";
import { Colors } from "../theme";
import { Box, IconButton, Button, Paper } from "@mui/material";
import { slideInBottom, slideInRight } from "../../react/animation";

export const Product = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        position: 'relative',
    }
}));

export const ProductImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '100%',
    background: Colors.white,
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        padding: '24px',
    }
}));

export const ProductActionButton = styled(IconButton)(({ theme }) => ({
    background: Colors.white,
    margin: 4,
    [theme.breakpoints.up("md")]: {
        position: "relative",
        top: 10,     // vers le bas
        right: 10,   // vers la gauche
    }
}));

export const ProductFavButton = styled(ProductActionButton, {
    shouldForwardProp: (prop) => prop !== "isFav",
})(({ isFav, theme }) => ({
    color: Colors.primary ,
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        right: 0,
        top: 0,
    },
}));

export const ProductAddToCart = styled(Button, {
    shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
    width: "120px",
    fontSize: "12px",
    color: Colors.white,
    fontWeight: "bold",
    border: "none",
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: "20%",
        width: "300px",
        padding: "10px 5px",
        animation:
            show &&
            `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
    background: Colors.secondary,
    opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

export const ProductActionsWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
    [theme.breakpoints.up("md")]: {
        display: show ? "visible" : "none",
        position: "absolute",
        right: 0,
        top: 0,
        animation:
            show &&
            `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
}));
