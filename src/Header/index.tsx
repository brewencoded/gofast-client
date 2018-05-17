import * as React from 'react'
import SearchBar from './SearchBar'

const Styles = require('./index.css')

export interface HeaderProps {
    search: (searchQuery: string) => void;
}
export interface HeaderState {
    titleVisible: boolean;
}
export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props)
    }
    render() {
        return (
            <header id="header" className="container">
                <SearchBar search={this.props.search}/>
            </header>
        )
    }
}