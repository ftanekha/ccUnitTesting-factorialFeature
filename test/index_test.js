const assert = require("assert"),
Calculate =  require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('tests if the output of 5! is equal to 120', () => {
            const expectedResult = 120,
            result = Calculate.factorial(5)
            assert.equal(result, expectedResult)
        })
        it('tests if the output of 3! is equal to 6', () => {
            const expectedResult = 6,
            result = Calculate.factorial(3)
            assert.equal(result, expectedResult)
        })
    });
});