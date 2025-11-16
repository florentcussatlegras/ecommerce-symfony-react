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
        <AppbarContainer
            sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                padding: "8px 0px",
            }}
        >
            {/* LEFT : menu */}
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>

            {/* CENTER : logo parfaitement centré */}
            <Link
                href="/"
                fontFamily='"Montez", "cursive"'
                fontSize="2.5em"
                underline="none"
                sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    whiteSpace: "nowrap",
                }}
            >
                My Bags
            </Link>

            {/* RIGHT : actions (search + panier + profile) */}
            <Box display="flex" alignItems="center" gap={1} marginLeft="auto">
                <IconButton onClick={() => setShowSearchBox(true)}>
                    <SearchIcon />
                </IconButton>

                {/* Panier */}
                <IconButton onClick={showShoppingCart}>
                    <Badge
                        badgeContent={calculateTotalQuantity()}
                        color="secondary"
                    >
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>

                {/* Profile */}
                <IconButton onClick={showProfile}>
                    <PersonIcon />
                </IconButton>
            </Box>
        </AppbarContainer>
    );
}
