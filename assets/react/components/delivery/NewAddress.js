import { Button, FormLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import { z } from "zod";

// const NewAddressFormSchema = z.object({
//     name: z.string().min(5),
//     email: z.email("Votre email est invalide."),
//     password: z.string().min(8),
//     terms: z.boolean("Veuillez accepter les termes d'utilisation"),
// });

export default function NewAddress() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        address: "",
        phoneNumber: "",
        zipCode: "",
        city: "",
        country: "",
        complement: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <Box
            component="form"
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            noValidate
            autoComplete="off"
            gap={2}
            sx={{
                width: { xs: "80%", lg: "60%" },
                marginTop: { xs: "50px", md: "0px" },
            }}
            onSubmit={handleSubmit}
            method="POST"
        >
            <FormLabel id="demo-radio-buttons-group-label" marginY={25}>
                Nouvelle adresse
            </FormLabel>

            <TextField
                id="firstname"
                label="Nom"
                name="firstname"
                variant="outlined"
                value={formData.firstname}
                onChange={handleChange}
            />
            <TextField
                id="lastname"
                label="Prénom"
                name="lastname"
                variant="outlined"
                value={formData.username}
                onChange={handleChange}
            />

            <TextField
                id="address"
                label="Adresse"
                name="address"
                variant="outlined"
                value={formData.address}
                onChange={handleChange}
            />
            <TextField
                id="phoneNumber"
                label="Téléphone"
                name="phoneNumber"
                variant="outlined"
                value={formData.phoneNumner}
                onChange={handleChange}
            />

            <TextField
                id="zipCode"
                label="Code postal"
                name="zipCode"
                variant="outlined"
                value={formData.zipCode}
                onChange={handleChange}
            />
            <TextField
                id="city"
                label="Ville"
                name="city"
                variant="outlined"
                value={formData.city}
                onChange={handleChange}
            />

            <TextField
                id="country"
                label="Pays"
                name="country"
                variant="outlined"
                value={formData.country}
                onChange={handleChange}
            />
            <TextField
                id="complement"
                label="Complément"
                name="complement"
                variant="outlined"
                value={formData.complement}
                onChange={handleChange}
            />

            <br />
            <Button
                type="submit"
                variant="contained"
                size="100"
                sx={{ alignSelf: "flex-start" }}
            >
                Ajouter
            </Button>
        </Box>
    );
}
