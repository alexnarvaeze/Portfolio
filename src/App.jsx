import React from "react"
import Intro from "./components/Intro"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Portfolio from "./components/portfolio"
import Timeline from "./components/Timeline"

function App() {
  

  return (
    <>
      <div>
        <Intro />
        <Portfolio />
        <Timeline />
        <Footer />
        <Contact/>
      </div>
      
    </>
  )
}

export default App
