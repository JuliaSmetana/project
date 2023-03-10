import React from 'react'
import s from './index.module.css'
import { InstagramOutlined } from '@ant-design/icons'
import { WhatsAppOutlined } from '@ant-design/icons'
import karta from './img/karta.png'








export default function Footer() {
  return (
    <footer className={s.footer} id='/contact'>
     <div className='wrapper'>
      
      <h1>Contact us</h1>

      <p style={{ fontSize: '24px', color: '#E1F4F2', marginTop: '30px'}}>+49 124 00 00 000</p>

    <div className={s.massengers}>
      <div className={s.instagram}>
      <InstagramOutlined  type="message" style={{ fontSize: '34px', color: '#E1F4F2', marginLeft: '10px' }} theme="outlined"/>
         <p>Instagram</p>
      </div>
      
      <div className={s.whatsapp}>
         <WhatsAppOutlined  type="message" style={{ fontSize: '34px', color: '#E1F4F2', marginLeft: '14px'  }} theme="outlined"/>
        <p>WhatsApp</p>
      </div>

      <div className={s.adress} style={{ width: '400px', color: '#E1F4F2', marginLeft: '300px', marginTop: '55px'}}>
      <h2 style={{ fontSize: '24px', color: '#E1F4F2', textDecoration: 'underline', marginTop: '-90px', marginLeft: '80px' }}>Adress</h2>
         <div className={s.adress_text} style={{  marginLeft: '80px', width: '400px', marginTop: '10px'}}>
         <p style={{marginBottom: '10px', fontSize: '24px'}}>Berlinerstrasse 20,</p>
         <p style={{marginBottom: '10px', fontSize: '24px'}}>Berlin. Germany</p>
         <p style={{marginBottom: '5px', textDecoration: 'underline'}}>Working Hours:</p>
         <p>Mon-Fr: from 8:30 to 18:30</p>
         </div>
         
      </div>
    
    </div>
     
    <div className={s.karta}>
         <img src={karta} alt="foto" />
         </div>
    
    </div>
    </footer>
  )
}
