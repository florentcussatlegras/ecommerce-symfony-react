import {
    Box,
    Button,
    Link,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton
} from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import useProductCategories from "../../hooks/useProductCategories";
import { visit } from "../../../utils";
import { Colors } from "../../../styles/theme";

export default function AppbarDesktop({ matches, shoppingCart }) {
    const { setShowSearchBox } = useUIContext();
    const categories = useProductCategories();

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
            >
                My Bags
            </Link>

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
                        "&.Mui-focusVisible": { backgroundColor: "transparent" },
                    }}
                >
                    <SearchIcon sx={{ color: Colors.dim_gray }} />
                </IconButton>

                {/* Actions (panier + profil) */}
                <Actions shoppingCart={shoppingCart} />
            </Box>
        </AppbarContainer>
    );
}
