import { CheckCircleOutline } from "@mui/icons-material";
import { Typography, Box, Button, Container } from "@mui/material";
import { formatPrice, visit } from "../../../utils";
import { useEffect, useState } from "react";

export default function Success({ amountTotal }) {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('success order');
        setLoading(true);
        fetch('/api/order/validate')
            .then(json => console.log(json))
            .finally(() => {
                setLoading(false);
            });
    }, []);

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

