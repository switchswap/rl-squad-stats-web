import './App.css'
import { NavBar } from './components/Navbar'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div class="flex flex-col h-full">
      <NavBar/>
      <HomePage/>
    </div>
  )
}

export default App
