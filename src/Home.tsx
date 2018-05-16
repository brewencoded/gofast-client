import * as React from 'react'
import FiltersView from './containers/Filters'
import Footer from './Footer/index'
import Header from './Header/index'
import ListView from './containers/ListView'
import TabView from './TabView/index'

const Home = () => {
    const tabs = [
        { title: 'Filters', active: true, view: FiltersView},
        { title: 'ID', active: false, view: ListView},
        { title: 'Description', active: false},
        { title: 'Dept.', active: false},
        { title: 'Last Sold', active: false},
        { title: 'Shelf Life', active: false},
        { title: 'Price', active: false},
        { title: 'Unit', active: false},
        { title: 'xFor', active: false},
        { title: 'Cost', active: false},
    ]
    return (
        <div>
            <Header />
            <TabView tabs={tabs}/>
            <Footer />
        </div>
    )
}

export default Home