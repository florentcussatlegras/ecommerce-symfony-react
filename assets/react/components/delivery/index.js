import { Box, Button, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";
import useAddresses from "../../hooks/useAddresses";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import NewAddress from "./NewAddress";
import { useState } from "react";
import { visit } from "../../../utils";

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;

const AddressContainer = styled(Box)(() => ({
    display: "flex",
    gap: "20px",
    width: "400px",
    marginBottom: 12,
    alignItems: "center",
    padding: "2px 8px",
}));

export default function Delivery() {
    const addresses = useAddresses();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        address_delivery: "1",
        address_billing: "1",
    });

    const handleSelect = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setLoading(true);
        fetch(`/session/address/delivery/${formData.address_delivery}`, {
            method: "POST",
        })
            .then((response) => response.json())
            .finally(() => {
                setLoading(false);
            });

        setLoading(true);
        fetch(`/session/address/billing/${formData.address_billing}`, {
            method: "POST",
        })
            .then((response) => response.json())
            .finally(() => {
                setLoading(false);
            });

        setLoading(true);
        fetch("/api/order/create")
            .then((response) => response.json())
            .finally(() => {
                setLoading(false);
            });

        visit('/order');
    };

    return (
        <>
            <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
                <Typography variant="h4">Livraison</Typography>
            </Box>
            <Box
                marginBottom={5}
                display="flex"
                sx={{
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Box component="form" sx={{ width: { xs: "100%", md: "1/3" } }}>
                    {addresses.length > 0 && (
                        <>
                            <AddressContainer>
                                <FormControl>
                                    <FormLabel
                                        id="demo-radio-buttons-group-label"
                                        marginY={25}
                                    >
                                        Adresse de livraison
                                    </FormLabel>
                                    <RadioGroup defaultValue={1}>
                                        {addresses.map((address) => (
                                            <FormControlLabel
                                                name="address_delivery"
                                                value={address.id}
                                                control={<Radio />}
                                                label={`${address.address} ${address.zipcode} ${address.city}`}
                                                onClick={handleSelect}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </AddressContainer>
                            <AddressContainer>
                                <FormControl>
                                    <FormLabel
                                        id="demo-radio-buttons-group-label"
                                        marginY={25}
                                    >
                                        Adresse de facturation
                                    </FormLabel>
                                    <RadioGroup defaultValue={1}>
                                        {addresses.map((address) => (
                                            <FormControlLabel
                                                name="address_billing"
                                                value={address.id}
                                                control={<Radio />}
                                                label={`${address.address} ${address.zipcode} ${address.city}`}
                                                onClick={handleSelect}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </AddressContainer>
                        </>
                    )}
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Valider mes adresses
                    </Button>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "2/3" } }}>
                    <NewAddress />
                </Box>
            </Box>
        </>
    );
}
