import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'


const FrontendMainLayout = () => {
  return (
    <>
        <Navbar />
        <div>
            <Outlet />
            <Footer />

        </div>
    </>
  )
}

export default FrontendMainLayout