import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeaderComponent from "./HeaderComponent"
import ContentAreaComponent from './ContentAreaComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <ContentAreaComponent></ContentAreaComponent>
    </>
  )
}

export default App
