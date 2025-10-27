import {useState} from 'react'
import reactLogo from './assets/react.svg'
import myIcon from './assets/icon.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './myStyles.css'

import MyButton from './components/MyButton.jsx'
import MyApp from './components/MyApp.jsx'
import MyList from './components/MyList.jsx'
import MyButton2 from "./components/MyButton2.jsx";


function App() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const params = {
        width: 50,
        height: 30
    }
    return (

        <>
            <MyButton />
            <MyButton />
            <MyButton />
            <MyApp />
            <MyList />
            <MyButton2 />
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={myIcon} className="myIcon" style={{
                        width: params.width,
                        height: params.height
                    }} alt="myIcon" />
                    <img src="src/assets/icon.svg" className="myIcon" alt="myIcon"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>

            </div>
            <h1 className="text-blue-600">Vite + React</h1>
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
