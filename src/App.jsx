import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Drawer } from "flowbite-react";
import SideBar from './components/Shared/SideBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='border'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <SideBar/>
    </div>
  )
}

export default App
