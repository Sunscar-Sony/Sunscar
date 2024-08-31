import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import About from './components/About/About'

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
    </>
  )
}

export default App
