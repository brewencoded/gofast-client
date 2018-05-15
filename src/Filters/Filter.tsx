import * as React from 'react'

const Style = require('./Filter.css')

interface FilterProps {
    name: string;
    denomination?: string;
}

export default (props: FilterProps) => (
    <div>{props.name} {props.denomination}</div>
)