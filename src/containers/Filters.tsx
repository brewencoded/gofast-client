import * as React from 'react'
import { connect } from 'react-redux'
import Filters from '../Filters/index'

const mapStateToProps = (storeState) => ({
    filters: storeState.filters
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)