import {useState} from "react";

//todo:
export default function MyTableForm({onAddProduct}) {
    const [title, setTitle] = useState('');
    const [isFruit, setIsFruit] = useState(false);
    const [price, setPrice] = useState(0);
    function handleSubmit(e) {
        e.preventDefault();

        onAddProduct({title: title, isFruit: isFruit, price: price});

        setTitle('');
        setIsFruit(false);
        setPrice(0)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} required />
            <input type="checkbox" checked={isFruit} onChange={(e) => setIsFruit(e.target.checked)} />
            <input type="text" value={price}  onChange={(e)=> setPrice(Number(e.target.value))} required/>
            <button type="submit">submit</button>
        </form>
    )

}