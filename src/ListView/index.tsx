import * as React from 'react'
const Style = require('./index.css')

export default () => {
    const props = {
        datalist: [
            { empty: '', id: '1', description: '2', department: '2', lastSold: '3', shelfLife: '4', price: '5', cost: '6' },
            { empty: '', id: '1', description: '2', department: '2', lastSold: '3', shelfLife: '4', price: '5', cost: '6' },
            { empty: '', id: '1', description: '2', department: '2', lastSold: '3', shelfLife: '4', price: '5', cost: '6' },
        ]
    }
    const list = props.datalist.map((data: any) => {
        const dataItems = Object.keys(data).map((item) => (
            <p className="data-item">{data[item]}</p>
        ));
        return (<div className="list-item">{dataItems}</div>)
    })
    return (<div className="list-view">{list}</div>)
}