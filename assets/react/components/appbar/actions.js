import { ListItemButton, ListItemIcon, Divider, Badge } from "@mui/material";
import {
    MyList,
    ActionIconsContainerMobile,
    ActionIconsContainerDesktop,
} from "../../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../../styles/theme";
import { visit } from "../../../utils";

export default function Actions({ shoppingCart }) {
    const showShoppingCart = () => {
        visit("/shopping-cart");
    };

    const showProfile = () => {
        visit("/profile");
    };

    const calculateTotalQuantity = () => {
        return shoppingCart?.items
            ?.map((item) => item.quantity)
            .reduce((a, b) => a + b, 0);
    };

    return (
        <MyList type="row">
            <ListItemButton
                sx={{
                    justifyContent: "center",
                    width: "50px"
                }}
            >
                <ListItemIcon
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: Colors.dim_gray,
                    }}
                    onClick={showShoppingCart}
                >
                    <Badge
                        badgeContent={calculateTotalQuantity()}
                        color="secondary"
                    >
                        <ShoppingCartIcon />
                    </Badge>
                </ListItemIcon>
            </ListItemButton>
            {/* <Divider orientation="vertical" flexItem /> */}
            {/* <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary,
                        }}
                    >
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem /> */}
            <ListItemButton
                sx={{
                    justifyContent: "center",
                    width: "50px"
                }}
            >
                <ListItemIcon
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: Colors.dim_gray,
                    }}
                    onClick={showProfile}
                >
                    <PersonIcon />
                </ListItemIcon>
            </ListItemButton>
        </MyList>
    );
}
