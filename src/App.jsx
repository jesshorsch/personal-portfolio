import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero.jsx";
import Navbar from './components/Navbar.jsx';
import Collaborations from './components/Collaborations.jsx';
import { Carousel } from "./components/ui/carousel.jsx"
import About from "./components/About.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Collaborations></Collaborations>
    <Carousel></Carousel>
    <About></About>
    </>
  )
}

export default App
