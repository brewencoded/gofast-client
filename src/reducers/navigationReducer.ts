import FiltersView from '../containers/Filters'
import ListView from '../containers/ListView'

import {
    NAVIGATE
} from '../constants'

const DefaultState = [
    { title: 'Filters', active: false, view: FiltersView},
    { title: 'ID', active: true, view: ListView},
    { title: 'Description', active: false, view: ListView},
    { title: 'Dept.', active: false, view: ListView},
    { title: 'Last Sold', active: false, view: ListView},
    { title: 'Shelf Life', active: false, view: ListView},
    { title: 'Price', active: false, view: ListView},
    { title: 'Unit', active: false, view: ListView},
    { title: 'xFor', active: false, view: ListView},
    { title: 'Cost', active: false, view: ListView},
]
const navigationReducer = (state=DefaultState, action: any) => {
    if (!action || Object.keys(action).length === 0) {
        return state
    }
    switch(action.type) {
        case NAVIGATE:
            const deactivatedTab = state.map((tab) => tab.active === true
                ? {...tab, active: false}
                : tab)
            return deactivatedTab.map((tab) => tab.title === action.payload.title
                ? {...tab, active: true}
                : tab)
        default:
            return state;
    }
}
export default navigationReducer
