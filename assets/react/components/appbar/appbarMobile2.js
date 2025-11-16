import {
    Badge,
    Box,
    IconButton,
    Link,
    ListItemButton,
    ListItemIcon,
} from "@mui/material";
import { AppbarContainer } from "../../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Colors } from "../../../styles/theme";
import { useUIContext } from "../../context/ui";
import { visit } from "../../../utils";

export default function AppbarMobile({ shoppingCart }) {
    const { setDrawerOpen, setShowSearchBox } = useUIContext();

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
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>

            <Link
                href="/"
                fontFamily='"Montez", "cursive"'
                fontSize="4em"
                padding="4px"
                flexGrow="1"
                underline="none"
                textAlign="center"
            >
                My Bags
            </Link>

            <Box display={"flex"} marginLeft={"auto"} gap={2}>
                <IconButton onClick={() => setShowSearchBox(true)}>
                    <SearchIcon />
                </IconButton>
                <ListItemButton
                    disableRipple
                    disableTouchRipple
                    sx={{
                        display: "flex",
                        justifyContent: "right",
                        padding: 0,
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                        "&:active": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "right",
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
                <ListItemButton
                    disableRipple
                    disableTouchRipple
                    sx={{
                        display: "flex",
                        justifyContent: "right",
                        padding: 0,
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                        "&:active": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "right",
                            color: Colors.dim_gray,
                        }}
                        onClick={showProfile}
                    >
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
            </Box>
        </AppbarContainer>
    );
}
