import * as React from 'react'
import SearchBar from './SearchBar'

const Styles = require('./index.css')

export interface HeaderProps {
}
export interface HeaderState {
    titleVisible: boolean;
}
export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props)
        this.state = {
            titleVisible: true,
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
                <SearchBar titleVisible={this.state.titleVisible} toggleTitle={this.toggleTitle} />
            </header>
        )
    }
}