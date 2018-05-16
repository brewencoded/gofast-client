import * as React from 'react'
import { connect } from 'react-redux'
import Filters from '../Filters/index'

const mapStateToProps = (storeState) => ({
    filters: storeState.filters
})

const mapDispatchToProps = (dispatch) => ({
    saveFilters: (filters: any) => dispatch(filters)
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)