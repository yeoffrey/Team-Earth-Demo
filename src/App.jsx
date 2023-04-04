import { useState } from 'react'
import './App.css'
import BluetoothButton from './components/BluetoothButton'
import SpotifyButton from './components/SpotifyLoginButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SpotifyButton></SpotifyButton>
    </div>
  )
}

export default App
