import React from 'react'
import './Card.css'
export default function Card() {
  return (
    <div>
      <div className="maincard">
        <div className="cardimg">
          <img src="../../public/g1.jpg" alt="" />
        </div>
        <div className="cardtext">
           <div className="cdate">
            14.0.12022
           </div>
           <div className="comment">
            <div className='bye'>
            <p>by</p><h6>david</h6>  
            </div>
            <div>
              <h6>03 comments</h6> 
              
            </div>
          
           </div>
           <h5>It is good for health to eat light Chicken Wings.</h5>
            <p>It is good for health to eat light Chicken Wings.</p>
        </div>
      </div>


    </div>
  )
}
