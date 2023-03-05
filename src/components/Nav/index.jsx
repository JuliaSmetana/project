import React from 'react'
//import { Link } from 'react-router-dom'
import s from './index.module.css'
import logo_img from './img/logo_project.png'
import { Link } from 'react-scroll'



export default function Nav() {
  return (
    <div className={s.nav_menu}>
      <a href="/">
         <img src={logo_img} alt="logo" />
      </a>
      
       
        <Link to="/catalog" spy={true} smooth={true} offset={50} duration={500} style={{cursor: 'pointer'}}>Catalog</Link>
        <Link to="/coupon" spy={true} smooth={true} offset={50} duration={500}  style={{cursor: 'pointer'}}>Coupon</Link>
        <Link to="/sale" spy={true} smooth={true} offset={50} duration={500}  style={{cursor: 'pointer'}}>Sale</Link>
        <Link to="/contact" spy={true} smooth={true} offset={50} duration={500}  style={{cursor: 'pointer'}}>Contact</Link>
        <a href='/basket'>Basket</a>

     

    </div>
  )
}
