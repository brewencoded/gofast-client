import * as React from 'react'
const Style = require('./Tab.css')

export interface TabProps {
    title: string;
    view?: any;
    active: boolean;
}

export default (props: TabProps) => {
    const activeStyle = {
        borderBottom: '.1em solid #444',
    } as React.CSSProperties
    const inactiveStyle = {
        color: '#888',
    } as  React.CSSProperties
    const borderStyle = props.active ? activeStyle : inactiveStyle
    return (
        <div className="tab" style={borderStyle}>
            {props.title}
        </div>
    )
}