import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function CategoriesCard( { id, image, title, category }) {


  //const category_url = `/categories/${id}`
  
    return (
       
      <Link className={s.categories_card} to={`/categories/${id}`} >
         
         <img src={`https://project-onh2.onrender.com/${image}`} alt={ title } />
         <p>{ category }</p> 
         <p>{ title }</p>
        </Link>
      
    )
}
