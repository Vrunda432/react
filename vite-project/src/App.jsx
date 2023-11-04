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
import UseStateClass from './hook-usestate/4.UseStateClass'
import Fragment from './hook-usestate/map-key-frgment/fragment'
import UseStateinClass from './hook-usestate/6.UseStateinClass'
import UseStateAlert from './hook-usestate/5.UseStateAlert'
import FunPros from './hook-usestate/2-11/props/FunPros'
import ClassProps from './hook-usestate/2-11/props/ClassProps'
import ProsPro1 from './hook-usestate/2-11/props/ProsPro1'
import CardCom from './hook-usestate/2-11/props/CardCom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <MainPage/> */}
     {/* <UseStateCom/> */}
     {/* <UseStatepro/> */}
     {/* <UseStatePro2/> */}
{/* <UseStateClass/> */}
{/* <Fragment/> */}
{/* <UseStateinClass/> */}
{/* <UseStateAlert/> */}
{/* {==========pros-============} */}
{/* <FunPros name={"vrunda"} age={28} color={"blue"}/> */}
{/* <FunPros name={"ishan"} age={24} color={"pink"}/> */}
{/* <ClassProps data={{name:"vrunda",greeting:"Good-Morning"}}/> */}
{/* <ClassProps/> */}
<ProsPro1/>

    </>
    
    
  )
}

export default App
