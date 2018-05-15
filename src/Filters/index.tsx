import * as React from 'react'
import DatePicker from 'react-datepicker'
import Filter from './Filter'
import Switch from './Switch'

const Styles = require('./index.css')
const DatePickerStyle = require('react-datepicker/dist/react-datepicker.css')

const FiltersView: React.SFC<any> = (props: any) => {
    return (
        <div>
            <div className="filter">
                <h3>Price</h3>
                <input type="text"/>
                <Switch on={true} onClick={() => {}}/>
            </div>
            <div className="filter">
                <h3>Cost</h3>
                <input type="text"/>
            </div>
            <div className="filter">
                <h3>Last Sold</h3>
                <DatePicker />
            </div>
            <div className="filter">
                <h3>Shelf Life</h3>
                <input type="text"/>
            </div>
        </div>
    )
}

export default FiltersView