import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero.jsx";
import Navbar from './components/Navbar.jsx';
import { Carousel } from "./components/ui/carousel.jsx"
import About from "./components/About.jsx"
import RecentProjects from './components/RecentProjects.jsx';
import Collaborations from './components/Collaborations';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <section id="recent-projects"><RecentProjects></RecentProjects></section>
    <section id="about"><About></About></section>
    <section id="collaborations"><Collaborations></Collaborations></section>
    </>
    
  )
}

export default App
