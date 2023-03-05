import { loadProduct } from '../store/reducers/product'

export const load_product = id  => {
      return dispatch => {
        fetch(`https://project-onh2.onrender.com/products/${id}`)
        .then(resp => resp.json())
        .then(json => dispatch(loadProduct(json)))
      }
       
       }