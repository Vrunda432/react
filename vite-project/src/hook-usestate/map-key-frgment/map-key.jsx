import React,{useId} from 'react'

export default function Mapkey() {
    let nameArr=["vrunda","ishan","hina","kishor"];

  return (
    <>
    <div>mapkey</div>
    {nameArr.map((e,i)=>{
        let id=useId();
        return(
            <div key={id}>
                <h1>
                    {i+1}.{e}
                </h1>
            </div>
        )
    })}
    </>
    
    
  );
}
