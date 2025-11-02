import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Box,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Image } from "@mui/icons-material";

export default function ShoppingCartTable({
    removeItemFromShoppingCart,
    shoppingCart,
    totalPrices,
}) {
    return (
        <>
            <TableContainer>
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
                                    <TableCell>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap={2}
                                        >
                                            <img
                                                width={100}
                                                height={100}
                                                src={
                                                    "/images/products/" +
                                                    item.product.imageName
                                                }
                                                lat={item.product.name}
                                            />{" "}
                                            {item.product.name}
                                        </Box>
                                    </TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>{item.product.price / 100} €</TableCell>
                                    <TableCell>
                                        <IconButton
                                            onClick={() =>
                                                removeItemFromShoppingCart(
                                                    item.product
                                                )
                                            }
                                        >
                                            <ClearIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box marginY={5} display={"flex"} justifyContent={"right"}>
                Total: {totalPrices / 100} € TTC
            </Box>
        </>
    );
}
