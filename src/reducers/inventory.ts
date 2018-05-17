import {
    FETCH_SUCCESS
} from '../constants'
const DefaultState: Array<any> = []

const inventoryReducer = (state=DefaultState, action: any) => {
    if (!action || Object.keys(action).length === 0) {
        return state
    }
    switch(action.type) {
        case FETCH_SUCCESS:
            return action.payload
        default:
            return state
    }
}
export default inventoryReducer
