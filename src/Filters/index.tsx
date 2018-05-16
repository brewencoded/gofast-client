import * as React from 'react'
import DatePicker from 'react-datepicker'
import Switch from './Switch'

const Styles = require('./index.css')
const DatePickerStyle = require('react-datepicker/dist/react-datepicker.css')

const FiltersView: React.SFC<any> = (props: any) => {
    const {
        price,
        cost,
        lastSold,
        shelfLife,
    } = props.filters
    return (
        <div className="filters">
            <div className="filter container">
                <h3>Price</h3>
                <div>
                    <input value={price.range[0]} className="filter-input" type="text"/>
                </div>
                <p>to</p>
                <div>
                    <input value={price.range[1]} className="filter-input" type="text"/>
                </div>
                <div className="switch-wrapper">
                    <Switch on={price.on} onClick={() => {}}/>
                </div>
            </div>
            <div className="filter container">
                <h3>Cost</h3>
                <div>
                    <input value={cost.range[0]} className="filter-input" type="text"/>
                </div>
                <p>to</p>
                <div>
                    <input value={cost.range[0]} className="filter-input" type="text"/>
                </div>
                <div className="switch-wrapper">
                    <Switch on={cost.on} onClick={() => {}}/>
                </div>
            </div>
            <div className="filter container">
                <h3>Last Sold</h3>
                <DatePicker format="m/m/YYY" selected={lastSold.range[0]}/>
                <p>-</p>
                <DatePicker selected={lastSold.range[1]}/>
                <div className="switch-wrapper">
                    <Switch on={lastSold.on} onClick={() => {}}/>
                </div>
            </div>
            <div className="filter container">
                <h3>Shelf Life</h3>
                <div>
                    <input value={shelfLife.range[0]} className="filter-input" type="text"/>
                </div>
                <p>to</p>
                <div>
                    <input value={shelfLife.range[1]} className="filter-input" type="text"/>
                </div>
                <div className="switch-wrapper">
                    <Switch on={shelfLife.on} onClick={() => {}}/>
                </div>
            </div>
        </div>
    )
}

export default FiltersView