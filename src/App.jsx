import React from 'react'
import {Navbar, Cards , Content, Hero,Footer } from './components'
import './App.css'

function App() {


  return (
    <div className="App p-4 flex flex-col justify-center">
      <Navbar />
      <Hero />
      <Cards />
      <Content />
      <Footer />
    </div>
  )
}

export default App
