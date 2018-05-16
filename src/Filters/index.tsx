import * as React from 'react'
import Switch from './Switch'
import InputFilter from './InputFilter'
import DateFilter from './DateFilter'

const Styles = require('./index.css')
const DatePickerStyle = require('react-datepicker/dist/react-datepicker.css')

class FiltersView extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.state = props.filters
        this.update = this.update.bind(this)
    }
    update(name) {
        return (change) => {
            switch(name) {
                case 'Price':
                    this.setState({...this.state, price: change})
                case 'Cost':
                    this.setState({...this.state, cost: change})
                    break;
                case 'Last Sold':
                    this.setState({...this.state, lastSold: change})
                    break;
                case 'Shelf Life':
                    this.setState({...this.state, shelfLife: change})
                    break;
                default:
                    break;
            }
        }
    }
    render() {
        const {
            price,
            cost,
            lastSold,
            shelfLife,
        } = this.props.filters
    
        return (
            <div className="filters">
                <InputFilter name="Price" range={price.range} onUpdate={this.update('Price')}/>
                <InputFilter name="Cost" range={cost.range} onUpdate={this.update('Cost')} />
                <DateFilter name="Last Sold" range={lastSold.range} onUpdate={this.update('Last Sold')} />
                <InputFilter name="Shelf Life" range={price.range} onUpdate={this.update('Shelf Life')} />
                <div className="save-button-wrapper">
                    <button className="save-button">Save</button>
                </div>
            </div>
        )
    }
}

export default FiltersView