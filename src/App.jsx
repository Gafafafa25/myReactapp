import {useState} from 'react'
import reactLogo from './assets/react.svg'
import myIcon from './assets/icon.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './myStyles.css'

import MyButton from './components/MyButton.jsx'
import MyApp from './components/MyApp.jsx'

function App() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    return (

        <>
            <MyButton />
            <MyButton />
            <MyButton />
            <MyApp />
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={myIcon} className="myIcon" alt="myIcon"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount(count => {
                    return count + 1
                })}>
                    count is {count}
                </button>
                <button onClick={() => setCount2(count2 => {
                    return count2 + 1
                })}>
                    count2 is {count2}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
                <p>{count} + {count2} = {count + count2}</p>
                <p>{count} / {count2} = {count / count2}</p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <p>
                count: {count * 2}
            </p>
        </>
    )
}

export default App
