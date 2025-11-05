const products = [
    {title: 'Cabbage', isFruit: false, id: 1},
    {title: 'Garlic', isFruit: false, id: 2},
    {title: 'Apple', isFruit: true, id: 3},
    {title: 'PineApple', isFruit: true, id: 4},
];

export default function MyTable() {
    const productsList = products.map(product =>
        <tr key={product.id}>
            <td className="border px-4 py-2">{product.id}</td>
            <td className="border px-4 py-2">{product.title}</td>
            <td className="border px-4 py-2"
                style={{color: product.isFruit ? "blue" : " green"}}
                >
                {product.isFruit ? 'yes' : 'no'}</td>
        </tr>
    )
    return (
        <>
            <h3>Table</h3>
            <table className="border border-collapse table-auto w-full">
                <thead>
                <tr>
                    <th className="border px-4 py-2">Id</th>
                    <th className="border px-4 py-2">Title</th>
                    <th className="border px-4 py-2">IsFruit</th>
                </tr>
                </thead>
                <tbody>{productsList}</tbody>
            </table>
        </>
    )
}