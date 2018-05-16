import * as React from 'react'
import DatePicker from 'react-datepicker'
import Filter from './Filter'
import Switch from './Switch'

const Styles = require('./index.css')
const DatePickerStyle = require('react-datepicker/dist/react-datepicker.css')

const FiltersView: React.SFC<any> = (props: any) => {

    return (
        <div className="filters">
            <div className="filter container">
                <h3>Price</h3>
                <div>
                    <input placeholder="$0.0" className="filter-input" type="text"/>
                </div>
                <p>to</p>
                <div>
                    <input placeholder="$100.00" className="filter-input" type="text"/>
                </div>
                <div className="switch-wrapper">
                    <Switch on={true} onClick={() => {}}/>
                </div>
            </div>
            <div className="filter container">
                <h3>Cost</h3>
                <div>
                    <input placeholder="$0.0" className="filter-input" type="text"/>
                </div>
                <p>to</p>
                <div>
                    <input placeholder="$100.00" className="filter-input" type="text"/>
                </div>
                <div className="switch-wrapper">
                    <Switch on={true} onClick={() => {}}/>
                </div>
            </div>
            <div className="filter container">
                <h3>Last Sold</h3>
                <DatePicker />
                <p>-</p>
                <DatePicker />
                <div className="switch-wrapper">
                    <Switch on={true} onClick={() => {}}/>
                </div>
            </div>
            <div className="filter container">
                <h3>Shelf Life</h3>
                <div>
                    <input placeholder="1d" className="filter-input" type="text"/>
                </div>
                <p>to</p>
                <div>
                    <input placeholder="3d" className="filter-input" type="text"/>
                </div>
                <div className="switch-wrapper">
                    <Switch on={true} onClick={() => {}}/>
                </div>
            </div>
        </div>
    )
}

export default FiltersView