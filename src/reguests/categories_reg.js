import { loadCategories } from '../store/reducers/categories'

export const load_categories = dispatch => {
    fetch('https://project-onh2.onrender.com/categories/all')
    .then(resp => resp.json())
    .then(json => dispatch(loadCategories(json)))
}