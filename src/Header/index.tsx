import * as React from 'react'
const Styles = require('./index.css')

const SearchStyleDefault: React.CSSProperties = {
}

const SearchStyleFull: React.CSSProperties = {
    ...SearchStyleDefault,

}

export interface HeaderProps {
}
export interface HeaderState {
    titleVisible: boolean
}
export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props)
        this.state = {
            titleVisible: true
        }
        this.toggleTitle = this.toggleTitle.bind(this)
    }
    toggleTitle() {
        this.setState({
            titleVisible: !this.state.titleVisible
        })
    }
    render() {
        const title = this.state.titleVisible ? <h1>Inventory</h1> : ''
        return (
            <header id="header" className="container">
                {title}
                <div id="search" className="container">
                    <input type="text" onFocus={this.toggleTitle} onBlur={this.toggleTitle} placeholder="Search"/>
                    <div id="search-icon">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
            </header>
        )
    }
}