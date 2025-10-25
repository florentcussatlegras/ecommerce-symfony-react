import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function ShoppingCartTable({
    removeItemFromShoppingCart,
    shoppingCart,
}) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Produit</TableCell>
                        <TableCell>Quantité</TableCell>
                        <TableCell>Prix</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {"items" in shoppingCart &&
                        shoppingCart.items.map((item) => (
                            <TableRow key={item.product.id}>
                                <TableCell>{item.product.name}</TableCell>
                                <TableCell>{item.product.quantity}</TableCell>
                                <TableCell>{item.product.price}</TableCell>
                                <TableCell>
                                    <IconButton>
                                        <ClearIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
