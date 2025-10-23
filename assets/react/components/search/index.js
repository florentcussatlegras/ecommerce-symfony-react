import { Slide } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { SearchBoxContainer } from "../../../styles/search";

export default function SearchBox() {
    const { showSearchBox, setShowSearchBox } = useUIContext();

    return (
        <Slide direction="down" in={true} timeout={500}>
            <SearchBoxContainer>
                
            </SearchBoxContainer>
        </Slide>
    );
}
