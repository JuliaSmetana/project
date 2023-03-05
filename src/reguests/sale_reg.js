import { loadSale } from '../store/reducers/sale'

export const load_sale = dispatch => {
    fetch('https://project-onh2.onrender.com/products/all')
    .then(resp => resp.json())
    .then(json => dispatch(loadSale(json)))
}