import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
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
import SingleInputRev from './8.input/SingleInputRev'
import MultipleInput from './8.input/MultipleInput'
import Example from './8.input/MultipleInput'
import MultiInput from './8.input/MultiInput'
import AllMulti from './8.input/AllMulti'
import CityStatePincode from './8.input/CityStatePincode'
import Use from './8.input/Use';
import Delete from './8.input/Delete';
import MultiUpdate from './8.input/MultiUpdate';
import LocalStorage from './9.localstorage/LocalStorage';
import UseLocalStorage from './9.localstorage/UseLocalStorage';
import ExLocalStorage from './9.localstorage/ExLocalStorage';
import InputPractice from './9.localstorage/InputPractice';
import CrudPratice from './9.localstorage/CrudPratice';
import CurdTest from './9.localstorage/CurdTest';
import UseRefCom from './10.useRef/UseRefCom';
import UseContaxtCom from './hook-usestate/usecontaxt/UseContaxtCom';
import TestCd from './9.localstorage/TestCd';
import LocalStorageRev from './9.localstorage/LocalStorageRev';



function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
    <div>
      {/* <PropsChange name="hello"/>
     <LifeCycleMethod/>
     <StateHook/> */}
     {/* <UseEffect/> */}
     {/* <useEffectArray/> */}
     {/* <UseEffectMatch/> */}
     {/* <SingleInput/> */}
     {/* <FormInput/> */}
      {/* <WebMain/>   */}
  {/* <Amount/> */}
  {/* <SingleInputRev/> */}
  {/* <MultipleInput/> */}
  {/* <Example/> */}
  {/* <MultiInput/> */}
  {/* <AllMulti/> */}
  {/* <CityStatePincode/> */}
  {/* <Use/> */}
  {/* <Delete/> */}
  {/* <MultiUpdate/> */}
  {/* <LocalStorage/> */}
  {/* <UseLocalStorage/> */}
  {/* <ExLocalStorage/> */}
  {/* <Prectice/> */}
    {/* <InputPractice/>/ */}
    {/* <CrudPratice/> */}
    {/* <CurdTest/> */}
    {/* <UseRefCom/> */}
    {/* <UseContaxtCom/> */}
    <TestCd/>
    {/* <LocalStorageRev/> */}
    </div>
     
  <ToastContainer />
  
    </>
    
  )
}

export default App
