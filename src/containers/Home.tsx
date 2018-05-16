import * as React from 'react'
import { connect } from 'react-redux'
import Home from '../Home'
import { navigateAction } from '../actions/navigateAction'

const mapStateToProps = (storeState) => ({
    navigation: storeState.navigation
})

const mapDispatchToProps = (dispatch) => ({
    navigate: (title: string) => dispatch(navigateAction(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)