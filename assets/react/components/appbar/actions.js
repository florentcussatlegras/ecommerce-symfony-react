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

export default function Actions({ matches, shoppingCart }) {

    const Component = matches 
        ? ActionIconsContainerMobile
        : ActionIconsContainerDesktop;

    console.log(shoppingCart);

    const calculateTotalQuantity = () => {
        return shoppingCart?.items?.map((item) => item.quantity).reduce((a, b) => a + b, 0);
    }

    return (
        <Component>
            <MyList type="row">
                <ListItemButton
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
                        <Badge badgeContent={calculateTotalQuantity()} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton
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
                <Divider orientation="vertical" flexItem />
                <ListItemButton
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
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
            </MyList>
        </Component>
    );
}
