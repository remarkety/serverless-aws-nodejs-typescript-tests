import 'mocha';
import * as chai from 'chai';

export const expect = chai.expect;

describe('Sample test', () => {
    it('1+1=2', () => {
        expect((1+1)).to.equal(2);
    });
});