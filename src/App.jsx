import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import About from './components/About/About'
import Skill from './components/Skills/Skill'

function App() {
  return (
    <>
    <div className='container'>
      <Navbar />
      <Hero />
    </div>
    <div>
      <About />
    </div>
    <div>
      <Skill />
    </div>
    </>
  )
}

export default App
