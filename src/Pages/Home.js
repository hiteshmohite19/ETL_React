import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Maincontent from '../Components/MainContent/Maincontent'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

function Home() {
  return (
      <BrowserRouter>
          <Navbar />
          <Sidebar />
          <Maincontent/>
    </BrowserRouter>
  )
}

export default Home