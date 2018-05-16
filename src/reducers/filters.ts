import * as moment from 'moment'

import {
    UPDATE_FILTERS
} from '../constants'

const DefaultState = {
    price: {
        range: [0, 0],
        on: false
    },
    cost: {
        range: [0, 0],
        on: false
    },
    lastSold: {
        range: [moment(), moment()],
        on: false
    },
    shelfLife: {
        range: [0, 0],
        on: false
    },
}

const filterReducer = (state=DefaultState, action: any) => {
    if (!action || Object.keys(action).length === 0) {
        return state
    }
    switch(action.type) {
        case UPDATE_FILTERS:
            return action.payload
        default:
            return state
    }
}
export default filterReducer
