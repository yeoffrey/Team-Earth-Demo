import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BluetoothScreen from './BluetoothPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BluetoothScreen></BluetoothScreen>
    </div>
  )
}

export default App
