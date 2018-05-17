import * as React from 'react'
const Styles = require('./SearchBar.css')

export interface SearchBarState {
    clearButtonVisible: boolean
}

export default class SearchBar extends React.Component<any, SearchBarState> {
    constructor(props: any) {
        super(props)
        this.state = {
            clearButtonVisible: false
        }
        this.toggleVisible = this.toggleVisible.bind(this)
        this.search = this.search.bind(this)
    }
    toggleVisible() {
        this.setState({
            clearButtonVisible: !this.state.clearButtonVisible
        })
    }
    search(event) {
        this.props.search(event.target.value)
    }
    render() {
        const alignment = this.state.clearButtonVisible ? 'left' : 'right'
        const alignStyle = {
            textAlign: alignment
        } as React.CSSProperties
        const clearInputButton = this.state.clearButtonVisible ? <div className="clear-input"><i className="fa fa-times"></i></div> : ''
        const toggleIfEmpty = (event: React.FocusEvent<HTMLInputElement>) => {
            if (!event.target.value || event.target.value === '') {
                this.toggleVisible()
            }
        } 
        return (
            <div id="search" className="container">
                {clearInputButton}
                <input style={alignStyle} type="text" onFocus={toggleIfEmpty} onBlur={toggleIfEmpty} onInput={this.search} placeholder="Search"/>
                <div id="search-icon">
                    <i className="fa fa-search"></i>
                </div>
            </div>
        )
    }
}
