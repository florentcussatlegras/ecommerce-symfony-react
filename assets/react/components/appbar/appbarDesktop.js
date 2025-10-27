import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import useProductCategories from "../../hooks/useProductCategories";
import { visit } from "../../../utils";

export default function AppbarDesktop({ matches, shoppingCart }) {

    const { setShowSearchBox } = useUIContext();
    const categories = useProductCategories();

    return (
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type="row">
                {categories.map((category) =>
                    <ListItemButton onClick={() => visit(`/product/${category.id}`)}>
                        <ListItemText primary={category.name} />
                    </ListItemButton>
                )}
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon onClick={() => setShowSearchBox(true)} />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches} shoppingCart={shoppingCart} />
        </AppbarContainer>
    );
}
