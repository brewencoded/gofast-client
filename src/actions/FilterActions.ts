import {
    UPDATE_FILTERS
} from '../constants'

export const updateFilterAction = (filters) => ({
    type: UPDATE_FILTERS,
    payload: filters
})