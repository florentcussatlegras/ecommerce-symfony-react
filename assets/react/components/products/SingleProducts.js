import { Product, ProductImage } from "../../../styles/products";
import ProductMeta from "./ProductMeta";

export default function SingleProducts({ product, matches }) {
    console
    return (
        <Product>
            <ProductImage src={'/images/products/' + product.imageName} />
            <ProductMeta product={product} matches={matches} />
        </Product>
    );
}
