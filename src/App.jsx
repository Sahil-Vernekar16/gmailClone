import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='bg-[#111111] w-screen h-screen overflow-hidden text-white'>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default App
