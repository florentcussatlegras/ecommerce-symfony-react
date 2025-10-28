import { Box, Button, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";
import useAddresses from "../../hooks/useAddresses";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import NewAddress from "./NewAddress";

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

export default function DeliveryAddress() {
    const addresses = useAddresses();

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
                <Box component="form" sx={{ width: { xs: '100%', md: '1/3' } }}>
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
                                    <RadioGroup>
                                        {addresses.map((address) => (
                                            <FormControlLabel
                                                value={address.id}
                                                control={<Radio />}
                                                label={`${address.address} ${address.zipcode} ${address.city}`}
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
                                    <RadioGroup>
                                        {addresses.map((address) => (
                                            <FormControlLabel
                                                value={address.id}
                                                control={<Radio />}
                                                label={`${address.address} ${address.zipcode} ${address.city}`}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </AddressContainer>
                        </>
                    )}
                    <br />
                    <Button type="submit" variant="contained">
                        Valider mes adresses
                    </Button>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '2/3' } }}>
                    <NewAddress />
                </Box>
            </Box>
        </>
    );
}
