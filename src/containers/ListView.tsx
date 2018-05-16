import * as React from 'react'
import { connect } from 'react-redux'
import ListView from '../ListView/index'

const mapStateToProps = (storeState) => ({
    inventory: storeState.inventory.default
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ListView)