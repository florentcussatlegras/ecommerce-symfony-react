import {
    Box,
    Badge,
    Link,
    ListItemButton,
    ListItemText,
    IconButton,
} from "@mui/material";
import { AppbarContainer } from "../../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useUIContext } from "../../context/ui";
import useProductCategories from "../../hooks/useProductCategories";
import { visit } from "../../../utils";
import { Colors } from "../../../styles/theme";

export default function AppbarDesktop({ shoppingCart }) {
    const { setShowSearchBox } = useUIContext();
    const categories = useProductCategories();

    const showShoppingCart = () => visit("/shopping-cart");
    const showProfile = () => visit("/profile");

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
                width: "100%",
                padding: 0,
            }}
        >
            {/* LEFT — LOGO */}
            <Link
                href="/"
                underline="none"
                fontFamily='"Montez", "cursive"'
                sx={{
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    textAlign: "left",
                    fontSize: {
                        xs: "2em",
                        sm: "2.5em",
                        md: "3em",
                        lg: "3.5em",
                        xl: "4em",
                    },
                    width: {
                        xs: "30%",
                        sm: "27%",
                        md: "25%",
                        lg: "20%",
                        xl: "15%",
                    },
                }}
            >
                My Bags
            </Link>

            {/* CENTER — CATEGORIES */}
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: {
                        xs: 0.5,
                        sm: 1,
                        md: 2,
                        lg: 3,
                    },
                    overflow: "hidden",
                }}
            >
                {categories.map((category) => (
                    <ListItemButton
                        key={category.id}
                        onClick={() => visit(`/product/${category.id}`)}
                        sx={{
                            whiteSpace: "nowrap",
                            paddingX: 0,

                            width: {
                                sm: "120px", // tablette
                                md: "125px", // tablette
                                lg: "130px", // desktop
                                xl: "150px", // large screen
                            },
                            minWidth: {
                                sm: "120px", // tablette
                                md: "125px", // tablette
                                lg: "130px", // desktop
                                xl: "150px", // large screen
                            },
                            maxWidth: {
                                sm: "120px", // tablette
                                md: "125px", // tablette
                                lg: "130px", // desktop
                                xl: "150px", // large screen
                            },

                            // Empêche ListItemText d'étirer le parent
                            ".MuiListItemText-root": {
                                flex: "none",
                                width: "100%",
                                textAlign: "center",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            },
                        }}
                    >
                        <ListItemText
                            primary={category.name}
                            sx={{ textAlign: "center" }}
                        />
                    </ListItemButton>
                ))}
            </Box>

            {/* RIGHT — ICONS */}
            <Box
                sx={{
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: {
                        xs: 1,
                        sm: 1.5,
                        md: 2,
                        lg: 2,
                    },
                }}
            >
                {/* Search icon */}
                <IconButton
                    onClick={() => setShowSearchBox(true)}
                    sx={{
                        color: Colors.dim_gray,
                    }}
                >
                    <SearchIcon />
                </IconButton>

                {/* Cart */}
                <IconButton
                    onClick={showShoppingCart}
                    sx={{ color: Colors.dim_gray }}
                >
                    <Badge
                        badgeContent={calculateTotalQuantity()}
                        color="secondary"
                    >
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>

                {/* Profile */}
                <IconButton
                    onClick={showProfile}
                    sx={{ color: Colors.dim_gray }}
                >
                    <PersonIcon />
                </IconButton>
            </Box>
        </AppbarContainer>
    );
}
