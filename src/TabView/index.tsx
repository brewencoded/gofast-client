import * as React from 'react'
import Tab from './Tab'
const Styles = require('./index.css')

export interface TabDescriptor {
    title: string;
    active: boolean;
    view?: React.ComponentClass<any> | React.StatelessComponent<any>
}

export interface TabViewProps {
    tabs: Array<TabDescriptor>;
    navigate: (title: string) => void;
}
export default class TabView extends React.Component<TabViewProps, {}> {
    constructor(props: TabViewProps) {
        super(props)
        this.state = {}
        this.setState = this.setState.bind(this)
    }
    render() {
        const tabs = this.props.tabs.map((tab, idx) => <Tab key={'tab-' + idx} navigate={this.props.navigate} {...tab}/>)
        const activeTab: TabDescriptor = this.props.tabs.find((tab) => tab.active)
        const ActiveView = activeTab.view
        return (
            <div className="tab-view">
                <div className="tab-bar container">
                    {tabs}
                </div>
                <ActiveView activeTab={activeTab.title}/>
            </div>
        )
    }
}
