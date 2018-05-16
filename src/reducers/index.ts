import { combineReducers } from 'redux'
import inventoryReducer from './inventory'
import filterReducer from './filters'

export default combineReducers({
    inventory: inventoryReducer,
    filters: filterReducer
})
