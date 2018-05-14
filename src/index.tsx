import * as React from 'react'
import { render } from 'react-dom'
import Home from './Home'
const Styles = require('./index.css')

render(<Home />, document.getElementById("index"));

export default Home