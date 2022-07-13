import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import AboutPage from '../src/pages/AboutPage'
import LoginPage from '../src/pages/LoginPage'
import Error404 from '../src/pages/Error404'
import CartPage from '../src/pages/CartPage'
import TiendaPage from '../src/pages/TiendaPage'
import ContactPage from '../src/pages/ContactPage'


const App = () => {
  return (
    <>
   
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="cart" element={<CartPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="error" element={<Error404/>}/>
            <Route path="contacto" element={<ContactPage/>}/>
            <Route path="tienda" element={<TiendaPage/>}/>
            <Route path="/*" element={<Navigate to="/about"/>}/>
        </Routes>
    </>
  )
}

export default App;