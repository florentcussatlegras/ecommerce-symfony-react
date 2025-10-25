import { CheckCircleOutline } from "@mui/icons-material";
import { Typography, Box, Button } from "@mui/material";
import { formatPrice, visit } from "../../../utils";

export default function Success({ amountTotal }) {
  return (
    <Container>
        <Box>
            <CheckCircleOutline color="success" />
            <Typography component="h1" variant="h4">
                Paiement réussi
            </Typography>
            <Typography component="h1" variant="h4">
                Merci pour votre achat de {formatPrice(amountTotal)}
            </Typography>
            <Box marginTop={2}>
                <Button variant="contained" color="primary" onClick={() => visit('/')}>Retour à la boutique</Button>
            </Box>
        </Box>
    </Container>
  )
}

