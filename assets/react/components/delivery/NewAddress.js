import { Button, FormLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Autocomplete from "react-google-autocomplete";

import { z } from "zod";

const NewAddressFormSchema = z.object({
    firstname: z.string().min(2),
    lastname: z.string().min(2),
    address: z.string().min(3).max(50),
    phoneNumber: z
        .string()
        .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, 'Invalid phone number'),
    zipCode: z
        .string()
        .regex(/^\d{5}-\d{3}$/, 'Invalid postal code'),
    city: z.string().min(2),
    country: z.string().min(2),
});

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

    const [errors, setErrors] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const result = NewAddressFormSchema.safeParse(formData);

        if (!result.success) {
            // console.log(console.log(z.flattenError(result.error).fieldErrors));
            const flattened = z.flattenError(result.error);
            console.log(flattened.fieldErrors);
            setErrors(flattened.fieldErrors);
        }
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
                error={errors.firstname}
                id="firstname"
                label="Nom"
                name="firstname"
                variant="outlined"
                value={formData.firstname}
                onChange={handleChange}
                helperText={errors.firstname}
            />
            <TextField
                error={errors.firstname}
                id="lastname"
                label="Prénom"
                name="lastname"
                variant="outlined"
                value={formData.username}
                onChange={handleChange}
                helperText={errors.firstname}
            />

            <TextField
                error={errors.address}
                id="address"
                label="Adresse"
                name="address"
                variant="outlined"
                value={formData.address}
                onChange={handleChange}
                helperText={errors.address}
            />
            <TextField
                error={errors.phoneNumber}
                id="phoneNumber"
                label="Téléphone"
                name="phoneNumber"
                variant="outlined"
                value={formData.phoneNumner}
                onChange={handleChange}
                helperText={errors.phoneNumber}
            />

            <TextField
                error={errors.zipCode}
                id="zipCode"
                label="Code postal"
                name="zipCode"
                variant="outlined"
                value={formData.zipCode}
                onChange={handleChange}
                helperText={errors.zipCode}
            />
            <TextField
                error={errors.city}
                id="city"
                label="Ville"
                name="city"
                variant="outlined"
                value={formData.city}
                onChange={handleChange}
                helperText={errors.city}
            />

            <TextField
                error={errors.country}
                id="country"
                label="Pays"
                name="country"
                variant="outlined"
                value={formData.country}
                onChange={handleChange}
                helperText={errors.country}
            />
            <TextField
                id="complement"
                label="Complément"
                name="complement"
                variant="outlined"
                value={formData.complement}
                onChange={handleChange}
            />

            {/* <Autocomplete
                apiKey={"AIzaSyDVXvx5zXRjaSBfL59amQ5ZqCvOw8Fxg5o"}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
            />

            <Autocomplete
                apiKey={"AIzaSyDVXvx5zXRjaSBfL59amQ5ZqCvOw8Fxg5o"}
                style={{ width: "90%" }}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
                options={{
                    types: ["(regions)"],
                    componentRestrictions: { country: "fr" },
                }}
                defaultValue="Paris"
            /> */}

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
