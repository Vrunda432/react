import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './project/MainPage'
import "./project/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import UseStateCom from './hook-usestate/1.UseState'
import UseStatepro from './hook-usestate/2.UseStatepro'
import UseStatePro2 from './hook-usestate/3.UseStatePro2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MainPage/>
     <UseStateCom/>
     <UseStatepro/>
     <UseStatePro2/>
    </>
  )
}

export default App
