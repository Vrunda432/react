import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsChange from './hook-usestate/2-11/props/PropsChange'
import LifeCycleMethod from './hook-usestate/2-11/props/4-11/LifeCycleMethod'
import StateHook from './Incre_Decrement'
import UseEffect from './hook-usestate/UseEffect'
import useEffectArray from './hook-usestate/useEffectArray'
import UseEffectMatch from './hook-usestate/UseEffectMatch'
import SingleInput from './8.input/SingleInput'
import FormInput from './8.input/FormInput'
import WebMain from './webpage/WebMain'



function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
    
     {/* <PropsChange name="hello"/>
     <LifeCycleMethod/>
     <StateHook/> */}
     {/* <UseEffect/> */}
     {/* <useEffectArray/> */}
     {/* <UseEffectMatch/> */}
     {/* <SingleInput/> */}
     {/* <FormInput/> */}
      <WebMain/>  
  {/* <Amount/> */}
    </>
    
  )
}

export default App
