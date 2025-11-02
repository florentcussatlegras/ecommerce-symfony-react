import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";
import useShoppingCart from "../../hooks/useShoppingCart";

export default function Appbar({shoppingCart}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    // const { addItemToShoppingCart, shoppingCart } = useShoppingCart();


    return (
        <>
            {matches ? (
                <AppbarMobile matches={matches} shoppingCart={shoppingCart} />
            ) : (
                <AppbarDesktop matches={matches} shoppingCart={shoppingCart} />
            )}
        </>
    );
}
