import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../../styles/theme";
import { clamp } from "./clamp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export default function IncDec({ decreaseQuantity, increaseQuantity, value }) {
    return (
        <Box display="flex">
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: `${Colors.secondary}`,
                }}
                onClick={decreaseQuantity}
            >
                <RemoveIcon />
            </IconButton>
            <Typography
                variant="h6"
                sx={{
                    border: `1px solid ${Colors.secondary}`,
                    p: 2,
                }}
            >
                {value}
            </Typography>
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: `${Colors.secondary}`,
                }}
                onClick={increaseQuantity}
            >
                <AddIcon />
            </IconButton>
        </Box>
    );
}
