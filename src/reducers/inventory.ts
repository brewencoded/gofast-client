// const DefaultState: Array<any> = []
const DefaultState = require('../../test/mocks/inventory')

const inventoryReducer = (state=DefaultState, action: any) => {
    if (!action || Object.keys(action).length === 0) {
        return state
    }
    return state
}
export default inventoryReducer
