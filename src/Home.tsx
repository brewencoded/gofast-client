import * as React from 'react'
import FiltersView from './Filters/index'
import Footer from './Footer/index'
import Header from './Header/index'
import TabView from './TabView/index'

const Home = () => {
    const tabs = [
        { title: 'Filters', active: true, view: FiltersView},
        { title: 'ID', active: false},
        { title: 'Description', active: false},
        { title: 'Department', active: false},
        { title: 'Last Sold', active: false},
        { title: 'Shelf Life', active: false},
        { title: 'Price', active: false},
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