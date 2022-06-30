import { useState } from 'react'
import logo from './logo.svg'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  const title = "This is my name";
  const likes = 50;
  const person = {myname : "James", age:50, address: "rayfield"}


  return (
    <div className="App">
      <Navbar />
      <div className="content"> 
       <Home />
       
      </div>
    </div>
  )
}

export default App
