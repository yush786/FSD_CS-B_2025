import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './Component/Gallery.jsx'
import Statehandling from './Component/Statehandling.jsx'
import Profile from './Component/Profile.jsx'
import ImageManupulation from './Component/ImageManupulation.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'



function App() {
  
  return (
    <div className='cantainer'>
      {/* <h1>Welcome to Vite + React</h1>
      <h3 style={{ backgroundColor: '', color: 'white' }}> */}

        {/* <Statehandling />  */}
        {/* <ImageManupulation/>
      </h3> */}
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
