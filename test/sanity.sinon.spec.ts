import { expect } from 'chai'
import * as sinon from 'sinon'

describe('Sanity test sinon', () => {
    it('should pass', () => {
        const once = (fn) => fn()
        const mockFn = sinon.fake();
        once(mockFn);

        expect(mockFn.called).to.be.true;
        expect(mockFn.calledOnce).to.be.true
    })
})