import React from 'react'
import Footer from './Footer.jsx'
import Middle from './Middle.jsx'
import Top from './Top.jsx'
import gabbyPhoto from '/images/gabby-photo.jpeg'
import "./app.css"




function App (){
  return (
    <div className='mainContent'>
      <img src={gabbyPhoto}/>
      <Top />
      <Middle />
      <Footer />
    </div>
  )
}
export default App