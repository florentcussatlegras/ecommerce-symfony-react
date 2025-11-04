import { Box, IconButton, Link } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile({ shoppingCart }) {
    const { setDrawerOpen, setShowSearchBox } = useUIContext();

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
                marginLeft="100px"
            >
                My Bags
            </Link>

            <Box display={"flex"} marginLeft={"auto"}>
                <IconButton onClick={() => setShowSearchBox(true)}>
                    <SearchIcon />
                </IconButton>
                <Actions shoppingCart={shoppingCart} />
            </Box>
        </AppbarContainer>
    );
}
