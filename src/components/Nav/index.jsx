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
      
       
        <a href="/categories">Catalog</a>

       
        <Link to="/coupon" spy={true} smooth={true} offset={50} duration={500}  style={{cursor: 'pointer'}}>Coupon</Link>
       
        <a href="/sale">Sale</a>

        
        <Link to="/contact" spy={true} smooth={true} offset={50} duration={500}  style={{cursor: 'pointer'}}>Contact</Link>
        
       
        <a href='/basket'>Basket</a>

     

    </div>
  )
}
