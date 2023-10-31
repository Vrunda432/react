
import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Body from './Body'
import Footer from './Footer'

export default function MainPage() {
  return (
    <div>


        <Header/>
        <Navigation/>
        <div className='d-flex'>
            <Content/>
            <Body/>
            <Content/>  
        </div>
        <Footer/>
    </div>
  )
}
