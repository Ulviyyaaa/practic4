import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import AddPageComponents from '../../Components/AddPageComponents'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'

function Add() {
  return (
    <div>
        <HelmetProvider>
        <Helmet>
            <title>
                Add page
            </title>
        </Helmet>
        <Navbar/>
        <AddPageComponents/>
        <Footer/>
        </HelmetProvider>
    </div>
  )
}

export default Add