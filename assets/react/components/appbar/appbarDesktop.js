import {
    Box,
    Badge,
    Link,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
} from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import useProductCategories from "../../hooks/useProductCategories";
import { visit } from "../../../utils";
import { Colors } from "../../../styles/theme";

export default function AppbarDesktop({ matches, shoppingCart }) {
    const { setShowSearchBox } = useUIContext();
    const categories = useProductCategories();

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
            {/* <AppbarHeader>
                <Link>
                My Bags

                </Button>
            </AppbarHeader> */}
            <Link
                href="/"
                fontFamily='"Montez", "cursive"'
                fontSize="4em"
                padding="4px"
                flexGrow="1"
                underline="none"
                sx={{
                    width: { sm: "25%", lg: "20%", xl: "15%" }
                }}
            >
                My Bags
            </Link>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexGrow: 1,
                    alignItems: "center",
                    width: "10%", // ajustable
                    gap: 1,
                    width: { sm: "75%", lg: "80%", xl: "85%" },
                    marginX: "30px",
                }}
            >
                {categories.map((category) => (
                    <ListItemButton
                        onClick={() => visit(`/product/${category.id}`)}
                        sx={{
                            width: "60px",
                        }}
                    >
                        <ListItemText
                            primary={category.name}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        />
                    </ListItemButton>
                ))}
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexGrow: 0,
                    alignItems: "center",
                    width: "10%", // ajustable
                    gap: 1,
                }}
            >
                {/* SEARCH : IconButton petit et contrôlé */}
                <IconButton
                    onClick={() => setShowSearchBox(true)}
                    disableRipple
                    sx={{
                        width: 20,
                        height: 20,
                        minWidth: 20,
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": { backgroundColor: "transparent" },
                        "&.Mui-focusVisible": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <SearchIcon sx={{ color: Colors.dim_gray }} />
                </IconButton>

                <ListItemButton
                    disableRipple
                    disableTouchRipple
                    sx={{
                        display: "flex",
                        justifyContent: "right",
                        width: "20px",
                        minWidth: "20px",
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
                        width: "20px",
                        minWidth: "20px",
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
