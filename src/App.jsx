import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Academic from './Pages/Academic/Academic'
import Process from './Pages/Process/Process'
import Features from './Pages/Features/Features'
import Events from './Pages/Events/Events'
import Team from './Pages/Team/Team'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'

function App() {

  return (
    <div className='w-full h-auto min-h-screen flex-col max-xs:w-full space-y-4 bg-[#F1FAEE] gap-5 flex justify-center items-center'>
     <Home/>
     <About/>
     <Academic/>
     <Process/>
     <Features/>
     <Events/>
     <Team/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
