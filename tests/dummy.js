import {assert, expect} from 'chai';
import {calc} from '../source/script/dummy';

describe("dummy_test", function() {
    it('mock test', function() {
        var result = calc(5, 7);
        assert.equal(result, 12);
    });
});