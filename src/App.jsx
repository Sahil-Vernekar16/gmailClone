import './App.css'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'
import Inbox from './components/Inbox.jsx'
import Mail from './components/Mail.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ComposeMail from './components/ComposeMail.jsx'
import Login from './components/Login.jsx'
import { useSelector } from 'react-redux'
function App() {
const user = useSelector(store=>store.authSlice.user)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children:[
      {
        path: '/',
        element: <Inbox/>,
      },
      {
        path: '/mail/:id',
        element: <Mail/>,
      }
    ]
  }
])
  return (
    <>
    {
      !user ? (<Login/>) : (<>
      <div className='bg-[#111111] w-screen h-screen overflow-hidden text-white'>
      <Navbar/>
      <RouterProvider router={router}/>
      <div className='absolute w-[40%] bottom-0 right-20 z-10'>
        <ComposeMail/>
      </div>
    </div>
      </>)
    }
    </>
    
  )
}

export default App
