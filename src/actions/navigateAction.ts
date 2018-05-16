import {
    NAVIGATE
} from '../constants'

export const navigateAction = (title) => ({
    type: NAVIGATE,
    payload: {
        title
    }
})
