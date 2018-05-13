import * as React from 'react'
import { expect } from 'chai'
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme'
import Home from '../src/Home'

const homeComponent = shallow(<Home />)

describe('Sanity test enzyme', () => {
    it('should pass', () => {
        expect(homeComponent.equals(<div>Hello React!</div>)).to.be.true
    })
})