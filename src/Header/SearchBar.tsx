import * as React from 'react'
const Styles = require('./SearchBar.css')

export interface SearchBarProps {
    toggleTitle: () => void;
    titleVisible: boolean;
}

export default (props: SearchBarProps) => {
    const toggleTitleIfEmpty = (event: React.FocusEvent<HTMLInputElement>): void => {
        if (!event.target.value || event.target.value === '') {
            props.toggleTitle()
        }
    }
    const alignment = props.titleVisible ? 'right' : 'left'
    const alignStyle = {
        textAlign: alignment
    } as React.CSSProperties
    const clearInputButton = props.titleVisible ? '' : <div className="clear-input"><i className="fa fa-times"></i></div>
    return (
        <div id="search" className="container">
            {clearInputButton}
            <input style={alignStyle} type="text" onFocus={toggleTitleIfEmpty} onBlur={toggleTitleIfEmpty} placeholder="Search"/>
            <div id="search-icon">
                <i className="fa fa-search"></i>
            </div>
        </div>
    )
}