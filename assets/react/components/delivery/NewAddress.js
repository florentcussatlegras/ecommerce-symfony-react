import { Button, FormLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function NewAddress() {
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
                marginTop: { xs: "50px", md: "0px" }
            }}
        >
            <FormLabel id="demo-radio-buttons-group-label" marginY={25}>
                Nouvelle adresse
            </FormLabel>

            <TextField id="firstname" label="Nom" variant="outlined" />
            <TextField id="lastname" label="Prénom" variant="outlined" />

            <TextField id="address" label="Adresse" variant="outlined" />
            <TextField id="phoneNumber" label="Téléphone" variant="outlined" />

            <TextField id="zipCode" label="Code postal" variant="outlined" />
            <TextField id="city" label="Ville" variant="outlined" />

            <TextField id="country" label="Pays" variant="outlined" />
            <TextField id="complement" label="Complément" variant="outlined" />

            <br />
            <Button type="submit" variant="contained" size="100" sx={{ alignSelf: 'flex-start' }}>
                Ajouter
            </Button>
        </Box>
    );
}
