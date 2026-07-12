import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Homepage from './page/home'
import { Outlet, Route, Router, Routes } from 'react-router-dom'
import About from './page/about'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ContactPage from './page/contact'
import LoginPage from './page/login'
import Oneproducts from './page/oneproduct'
import ProductBody from './page/products'

function App() {
  return (

    <Routes>
      {/* //mainlayout */}
    <Route path='/' element ={<MainLayout/>} >
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/produst' element={<ProductBody/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Route>

    {/* login */}
    <Route path='/login' element={<LoginPage/>} />

    </Routes>

  );
}

export default App;

function MainLayout(){
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
