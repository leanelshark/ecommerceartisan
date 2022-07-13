import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import { BsCart } from 'react-icons/bs';



const Navbar = () => {
  return (
    <div className="Navbar container">
        <div className="row justify-content-lg-between justify-content-center py-3 align-items-center">
            <div className="col col-auto order-2 order-lg-1">
                <ul className="nav ">
                    <li className="nav-item">
                        <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/about">About</NavLink>
                    </li>
                </ul>
            </div>
            
            <div className="col-12 col-lg text-center col-auto order-1 order-lg-2">
                <h1> <Link className="navbar-brand" to="/">Ecommerce</Link></h1>
            </div>

            <div className="col col-auhref order-3 order-lg-3">
                <ul className="nav">
                    <li className="nav-item ">
                        <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/contacto">Contacto</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/tienda">Tienda</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/cart">Carrito<span><BsCart/></span></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar