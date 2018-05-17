import * as React from 'react'
import { connect } from 'react-redux'
import Header from '../Header/index'
import { searchAction } from '../actions/searchAction'

const mapStateToProps = (storeState) => ({})

const mapDispatchToProps = (dispatch) => {
    const searchThunk = searchAction(dispatch)
    return {
        search: (searchQuery) => searchThunk(searchQuery)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)