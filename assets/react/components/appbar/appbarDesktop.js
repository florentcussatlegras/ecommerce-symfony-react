import {
    Box,
    Button,
    Link,
    ListItemButton,
    ListItemIcon,
    ListItemText,
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
                    justifyContent: "right",
                    flexGrow: 0,
                    alignItems: "center",
                    width: "30%", // 👈 moitié de la largeur totale
                    gap: 1,
                }}
            >
                <ListItemButton
                    disableRipple
                    disableTouchRipple
                    sx={{
                        width: "20px",
                        minWidth: "20px",
                        padding: 0,
                        "&.MuiListItemButton-root": {
                            minWidth: "20px !important",
                            paddingLeft: 0,
                            paddingRight: 0,
                        },
                        "& .MuiListItemIcon-root": {
                            minWidth: "20px !important",
                        },
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "right",
                            color: Colors.dim_gray,
                            width: "20px",
                            minWidth: "20px",
                            padding: 0,
                        }}
                    >
                        <SearchIcon onClick={() => setShowSearchBox(true)} />
                    </ListItemIcon>
                </ListItemButton>

                <Actions shoppingCart={shoppingCart} />
            </Box>
        </AppbarContainer>
    );
}
