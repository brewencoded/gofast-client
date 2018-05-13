import * as React from 'react'
import { expect } from 'chai'
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme'

const sanityFixture = shallow(<div id="test"></div>)

describe('Sanity test enzyme', () => {
    it('should pass', () => {
        expect(sanityFixture.equals(<div id="test"></div>)).to.be.true
    })
})