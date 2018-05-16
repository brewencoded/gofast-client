import * as React from 'react'
import Switch from './Switch'
import DatePicker from 'react-datepicker'

export default class DateFilter extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.state = props
        this.updateLow = this.updateLow.bind(this)
        this.updateHigh = this.updateHigh.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    updateLow(date) {
        this.setState({
            ...this.state,
            range: [date, this.state.range[1]]
        })
        this.props.onUpdate(this.state)
    }
    updateHigh(date) {
        this.setState({
            ...this.state,
            range: [this.state.range[0], date]
        })
        this.props.onUpdate(this.state)
    }
    toggle() {
        this.setState({
            ...this.state,
            on: !this.state.on
        })
        this.props.onUpdate(this.state)
    }
    render() {
        const { name, range, on, update } = this.state
        
        return (
            <div className="filter container">
                <h3>Last Sold</h3>
                <DatePicker selected={range[0]} onChange={this.updateLow}/>
                <p>-</p>
                <DatePicker selected={range[1]} onChange={this.updateHigh}/>
                <div className="switch-wrapper">
                    <Switch on={on} onClick={this.toggle}/>
                </div>
            </div>
        )
    }
}
