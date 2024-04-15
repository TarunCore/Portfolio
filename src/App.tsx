import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import AppBar from './components/AppBar'
function App() {

  return (
    <div className='text-white'>
      <AppBar/>
      <Home></Home>
    </div>
  )
}

export default App
