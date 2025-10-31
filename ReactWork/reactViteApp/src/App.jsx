import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './Component/Gallery.jsx'
import Statehandling from './Component/Statehandling.jsx'
import Profile from './Component/Profile.jsx'

function App() {
  
  return (
    <div className='cantainer'>
      <h1>Welcome to Vite + React</h1>
      <h3 style={{ backgroundColor: '', color: 'white' }}>

      <Statehandling/> 
      </h3>
    </div>
  )
}

export default App
