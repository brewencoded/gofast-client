import * as React from 'react'
const Style = require('./index.css')
const order = ['ID', 'Description', 'Department', 'lastSold', 'ShelfLife', 'Price', 'Unit', 'xFor', 'Cost']

export default (props) => {
    const list = props.inventory.map((data: any) => {
        const dataItems = order.map((item) => (
            <p className="data-item">{data[item]}</p>
        ));
        return (<div className="list-item"><p className="data-item"></p>{dataItems}</div>)
    })
    return (<div className="list-view">{list}</div>)
}