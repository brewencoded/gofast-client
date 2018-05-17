import {
    FETCH_SUCCESS
} from '../constants'
import axios from 'axios'

export const searchAction = (dispatch) => async (searchQuery) => {
    try {
        // TODO: use an environment variable to get the baseurl
        const response = await axios.get(`http://localhost:5000/api/search?query=${searchQuery}`)
        dispatch({
            type: FETCH_SUCCESS,
            payload: JSON.parse(response.data.results)
        })
    } catch (e) {
        console.log(e)
    }
}

export default searchAction