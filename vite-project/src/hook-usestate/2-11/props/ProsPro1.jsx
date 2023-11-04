import React from 'react'
import DATA from "../../product.json"
import CardCom from './CardCom';

export default function ProsPro1() {
  console.log(DATA);
  return (
   <div className='d-flex flex-wrap gap-3 m-5'>
    {
      DATA.map((e)=>{
        //return<h1> </h1>
        return <CardCom name={e.title} price={e.price} description={e.description} dics={e.discountPercentage} after={e.price*e.discountPercentage/100}/>
      })
    }
      
    </div>
  )
}
