import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Pricing from './Pages/Pricing'

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <Home />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
