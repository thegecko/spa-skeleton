import {assert, expect} from 'chai';
import Dummy from '../source/script/dummy';

describe("dummy_test", function() {
    it('mock test', function() {
    	var dumdum = new Dummy();
    	var result = dumdum.calc(5, 7);
        assert.equal(result, 12);
    });
});