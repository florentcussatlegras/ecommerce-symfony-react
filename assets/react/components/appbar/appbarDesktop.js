import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, AppbarContainer, AppbarHeader, MyList } from "../../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {

    const Component = matches
        ? ActionIconsContainerMobile
        : ActionIconsContainerDesktop;

    return (
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Categories" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contact Us" />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches} />
        </AppbarContainer>
    );
}
