import * as React from 'react'
const Style = require('./Tab.css')

export interface TabProps {
    title: string;
    view?: any;
    active: boolean;
    navigate: (title: string) => void;
}

export default (props: TabProps) => {
    const activeStyle = {
        borderBottom: '.1em solid #444',
    } as React.CSSProperties
    const inactiveStyle = {
        color: '#888',
    } as  React.CSSProperties
    const borderStyle = props.active ? activeStyle : inactiveStyle
    const navigate = () => props.navigate(props.title)
    return (
        <div
            className="tab"
            style={borderStyle}
            onClick={navigate}>
            {props.title}
        </div>
    )
}