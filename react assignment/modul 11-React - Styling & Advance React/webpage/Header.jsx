import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <div>
     <div className="header">
      <div className="container">
        <div className="mainhead">
            <div className="title">
              <h1>POULTRY FIELD
</h1>
            </div>
            <div className="nav">
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Contact</a></li>
              
              </ul>
            </div>
            <div className="search">
              <button>Search</button>
            </div>
            <div className="theme"></div>
        </div>
      </div>
     </div>
      
    </div>
  )
}
