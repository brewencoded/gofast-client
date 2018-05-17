import * as React from 'react'
import compare from '../helpers/compare'
const Style = require('./index.css')
const order = ['ID', 'Description', 'Department', 'lastSold', 'ShelfLife', 'Price', 'Unit', 'xFor', 'Cost']

export default (props) => {
    const activeTab = props.activeTab === 'Dept.' ? 'Department' : props.activeTab
    const inventory = props.inventory ? props.inventory : []
    const list = inventory
        .sort((a, b) => compare(a[activeTab], b[activeTab]))
        .map((data: any, index) => {
        const dataItems = order.map((item, index) => (
            <p key={'data-item-' + index} className="data-item">{data[item]}</p>
        ));
        return (<div key={'list-item-' + index} className="list-item"><p className="data-item"></p>{dataItems}</div>)
    })
    return (<div className="list-view">{list}</div>)
}