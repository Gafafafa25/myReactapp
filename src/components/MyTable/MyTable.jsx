import {useState} from "react";
// import MyTableForm from "@/components/MyTable/MyTableForm.jsx";
import MyTableForm from "./MyTableForm.jsx";

const products = [
    {title: 'Cabbage', price: 100, isFruit: false, id: 1},
    {title: 'Garlic', price: 200, isFruit: false, id: 2},
    {title: 'Apple', price: 300, isFruit: true, id: 3},
    {title: 'PineApple', price: 400, isFruit: true, id: 4},
];

export default function MyTable() {
    const [items, setItems] = useState(products);

    const handleAddProduct = (newProduct) => {
        //todo: bug with id
        const maxId = Math.max(...products.map(x => x.id)) + 1;
        const newProductWithId = {...newProduct, id: maxId};
        setItems([...items, newProductWithId])
    }

    const productsList = items.map(product =>
        <tr key={product.id}>
            <td className="border px-4 py-2">{product.id}</td>
            <td className="border px-4 py-2">{product.title}</td>
            <td className="border px-4 py-2">{product.price}</td>
            <td className="border px-4 py-2"
                style={{color: product.isFruit ? "blue" : " green"}}
            >
                {product.isFruit ? 'yes' : 'no'}</td>
        </tr>
    )
    return (
        <>
            <h3>Table</h3>
            <MyTableForm onAddProduct={handleAddProduct}/>
            <table className="border border-collapse table-auto w-full">
                <thead>
                <tr>
                    <th className="border px-4 py-2">Id</th>
                    <th className="border px-4 py-2">Title</th>
                    <th className="border px-4 py-2">Price</th>
                    <th className="border px-4 py-2">IsFruit</th>
                </tr>
                </thead>
                <tbody>{productsList}</tbody>
            </table>
        </>
    )
}