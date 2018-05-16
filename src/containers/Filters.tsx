import * as React from 'react'
import { connect } from 'react-redux'
import Filters from '../Filters/index'
import { updateFilterAction } from '../actions/FilterActions'

const mapStateToProps = (storeState) => ({
    filters: storeState.filters
})

const mapDispatchToProps = (dispatch) => ({
    updateFilters: (filters: any) => dispatch(updateFilterAction(filters))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)