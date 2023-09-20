import Demo from "./components/Demo";
import Hero from "./components/Hero";

import './App.css'

const App = () => {
  return (
    <main>
      <div className="main bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-300">
        <div className="gradient"/>
      </div>
      
      <div className="app ">
        <Hero/>
        <Demo/>
      </div>
    </main>
    
  )
}

export default App
