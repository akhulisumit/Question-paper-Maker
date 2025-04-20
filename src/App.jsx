import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-4">
        {/* Your main content goes here */}
      </main>
      <Footer />
    </div>
  )
}

export default App
