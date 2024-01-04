import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

export default function UseEffect() {

  const [count,setCount]=useState(0)
const [count2,setCount2]  =useState(20)

  // useEffect(()=>{
  //   console.log("-----without dependency-------")
  // })


  // useEffect(()=>{
  //   console.log("-------with blank array dependency------")
  // },[])



  useEffect(()=>{

  },[count])
  return (
    <>
    <div>
    <h1> UseEffect</h1>

<Button onClick={()=>setCount(count+1)}>


<hr/>
increment count
</Button>

    </div>
     
     <div>

     <Button onClick={()=>setCount2(count+1)}>increment</Button>
     </div>

   </>
  )
}















































































// import React, { useEffect, useState } from 'react'


// import { Button } from 'react-bootstrap';

// export default function UseEffect() {

//  const  [count,setcount]=useState(0);

//  const[count2,setcount2]=useState(20)

//   // useEffect(()=>{
//   //   console.log('--------without dependency------')
//   // })

//   // useEffect(()=>{
//   //  console.log('-------with blank array dependency-------')

//   // },[])


//   useEffect(()=>{
//   console.log("--------with count2 dependency--------")

//   if(count2 %2 ===0){
//     alert(`count is ${count}`);

//   }
//   },[count])
//   return (
//     <>
//     <div>
//     <h1>UseEffect</h1>
//     <h1>count is {count}</h1>
//      <Button  onClick={()=>setcount(count+1)}>incre-count</Button>
//      <hr />
//      <h1> count2 is {count2}</h1>
//      <Button onClick={()=>setcount2(count2+1)}>incre-count2</Button>
    
//     </div>
    
//     </>
//   )
// }





































// import React, { useEffect, useState } from 'react'
// import { Button } from 'react-bootstrap'

// export default function UseEffect() {

//   const [count,setcount]=useState(0)
//   const [count2,setcount2]=useState(110)
// //  useEffect(()=>{
// //   console.log("------without dependency------")
// // })

// // useEffect(()=>{
// //   console.log("------with blank array dependency----")
// // },[])


// useEffect(()=>{
//   console.log('--------with dependency-----')
//   if(count2  %2 ===0){
//     alert(`count is ${count}`)
//   }
// },[count])


//   return (

//     <>
//     <h1>count is {count}</h1>
//     <Button onClick={()=>setcount(count+1)}>incre-count</Button>

// <hr />

// <h1>
//   count2 is {count2}
// </h1>

//     <Button onClick={()=>setcount2(count2+1)}>incre-count2</Button>



//    </>

//   )
// }





































// import React, { useEffect, useState } from 'react'
// import { Button } from 'reactstrap'

// export default function UseEffect() {
//   const[count,setCount]=useState(0)
//   useEffect(()=>{
//     alert("heloooo")
//   },)

// //   useEffect(()=>{
// //     alert("========without value")
// //   },[])

// // useEffect(()=>{
// //     if(count % 5=== 0 && count!== 0)
// //      alert("--------count chnge-------")
// // },[count])

//   return (
//     <div>UseEffect

// <h1>
//     {count}
// </h1>

// <Button style={{padding:"10px 20px",background:"red",color:"white"}} onClick={()=>setCount(count+1)}>click

// </Button>
// <hr/>
// <h1>{count}</h1>

// <Button style={{padding:"10px 20px",background:"red",color:"white"}} onClick={()=>setCount(count+1)}>click

// </Button>







//     </div>
    
//   )
// }
