import * as React from 'react'
import Switch from './Switch'

export default class InputFilter extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.state = props
        this.updateLow = this.updateLow.bind(this)
        this.updateHigh = this.updateHigh.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    updateLow(event) {
        this.setState({
            ...this.state,
            range: [event.target.value, this.state.range[1]]
        })
        this.props.onUpdate(this.state)
    }
    updateHigh(event) {
        this.setState({
            ...this.state,
            range: [this.state.range[0], event.target.value]
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
                <h3>{name}</h3>
                <div>
                    <input value={range[0]} className="filter-input" type="text" onInput={this.updateLow} />
                </div>
                <p>to</p>
                <div>
                    <input value={range[1]} className="filter-input" type="text" onInput={this.updateHigh} />
                </div>
                <div className="switch-wrapper">
                    <Switch on={on} onClick={this.toggle}/>
                </div>
            </div>
        )
    }
}
