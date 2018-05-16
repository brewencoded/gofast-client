import { combineReducers } from 'redux'
import inventoryReducer from './inventory'
import filterReducer from './filters'
import navigationReducer from './navigationReducer'

export default combineReducers({
    inventory: inventoryReducer,
    filters: filterReducer,
    navigation: navigationReducer
})
