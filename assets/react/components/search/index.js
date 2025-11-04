import { IconButton, Slide } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { SearchBoxContainer, SearchField } from "../../../styles/search";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { visit } from "../../../utils";

export default function SearchBox() {
    const { showSearchBox, setShowSearchBox } = useUIContext();
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const fetchData = (value) => {
        fetch("/api/products/list")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((product) => {
                    return (
                        value &&
                        product &&
                        product.name &&
                        product.name.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });
    };

    const handleChange = (event) => {
        const value = event.currentTarget.value;
        setInput(value);
        fetchData(value);
    };

    const handleSubmit = () => {
        console.log(results);
        // localStorage.setItem('results_search', results);
        // visit('/search');
    };

    return (
        <Slide direction="down" in={showSearchBox} timeout={500}>
            <SearchBoxContainer>
                <SearchField
                    color="secondary"
                    variant="standard"
                    fullWidth
                    placeholder="search..."
                    value={input}
                    onChange={handleChange}
                />
                <IconButton
                    onClick={handleSubmit}
                >
                    <SearchIcon
                        sx={{
                            fontSize: { xs: "2rem", md: "3rem" },
                        }}
                        color="secondary"
                    />
                </IconButton>
                <IconButton
                    onClick={() => setShowSearchBox(false)}
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                    }}
                >
                    <CloseIcon sx={{ fontSize: "4rem" }} color="secondary" />
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    );
}
