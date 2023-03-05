import { loadProducts } from '../store/reducers/products'

export const load_products = category  => {
      return dispatch => {
        fetch(`https://project-onh2.onrender.com/categories/${category}`)
        .then(resp => resp.json())
        .then(json => {
          const payload = json.map(el => ({
            ...el,
            hide: false
          }))
           dispatch(loadProducts(payload))
      })
    }
  } 
           
        
       
    
   
