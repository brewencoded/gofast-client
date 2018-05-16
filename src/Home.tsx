import * as React from 'react'
import Footer from './Footer/index'
import Header from './Header/index'
import TabView from './TabView/index'

const Home = (props) => {
    return (
        <div>
            <Header />
            <TabView tabs={props.navigation} navigate={props.navigate}/>
            <Footer />
        </div>
    )
}

export default Home