import React from 'react'

export default function FunPros({name,age,color})

 {
    //console.log("pros---->,props")
  return (
    < >
        <h1 style={{color:color}}>my name is {name}</h1>
        <h2> my age is{age}</h2>
    </>
  )
}
