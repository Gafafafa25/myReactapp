import MyButton2 from './MyButton.jsx'

export default function MyApp() {
    const user = {
        name: "John",
        age: "20"
    }
    return (
        <div>
            <h1>Welcome to my app</h1>
            <h2>
                {user.name}
            </h2>
            <MyButton2/>
        </div>
    );
}