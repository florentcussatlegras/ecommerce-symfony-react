import {
    Button,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../../styles/appbar";
import CloseIcon from "@mui/icons-material/Close";
import { lighten } from "polished";
import { Colors } from "../../../styles/theme";
import useProductCategories from "../../hooks/useProductCategories";

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {
    const { drawerOpen, setDrawerOpen } = useUIContext();
    const categories = useProductCategories();

    return (
        <>
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon
                        className="testing"
                        sx={{
                            fontSize: "2.5rem",
                            color: lighten(0.09, Colors.secondary),
                        }}
                    />
                </DrawerCloseButton>
            )}

            <Drawer open={drawerOpen}>
                <List>
                    {categories.map((category) => (
                        <ListItemButton>
                            <ListItemText>{category.name}</ListItemText>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
