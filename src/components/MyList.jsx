import {products} from "../data/products.js"
// import {products} from "@/data/products.js"


export default function MyList() {
    const listItems = products.map(product =>
        <li key={product.id} style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}>
            {product.title}
        </li>
    );
    console.log(listItems)
    return (
        <ul>{listItems}</ul>
    );
}

