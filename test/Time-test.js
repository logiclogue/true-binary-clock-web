var assert = require('chai').assert;
var Time = require('../src/Time.js');

describe('Time', function () {
    describe('#getDecimal', function () {
        var time = new Time();

        it('should be 0.5 if time is 12:00', function () {
            time.date = new Date('Jan 01 1970 12:00');

            assert.equal(time.getDecimal(), 0.5);

            
        });

        it('should be 0.25 if time is 6:00', function () {
            time.date = new Date('Jan 01 1970 6:00');

            assert.equal(time.getDecimal(), 0.25);
        });

        it('should be 0.9 if time is 21:36', function () {
            time.date = new Date('Jan 01 1970 21:36');

            assert.equal(time.getDecimal(), 0.9);
        });
    });

    describe('#getBinary', function () {
        var time = new Time();

        it('should be 1000000000000000 if time is 12:00', function () {
            var binary = getBinaryArray('1000000000000000');
            time.date = new Date('Jan 01 1970 12:00');

            assert.deepEqual(time.getBinary(), binary);
        });

        it('should be 0100000000000000 if time is 6:00', function () {
            var binary = getBinaryArray('0100000000000000');
            time.date = new Date('Jan 01 1970 6:00');

            assert.deepEqual(time.getBinary(), binary);
        });

        it('should be 1001000000000000 if time is 13:30', function () {
            var binary = getBinaryArray('1001000000000000');
            time.date = new Date('Jan 01 1970 13:30');

            assert.deepEqual(time.getBinary(), binary);
        });
    });
});


function getBinaryArray(binaryString) {
    var binaryArrayString = binaryString.split('');

    return binaryArrayString.map(function (stringNum) {
        if (stringNum === '1') {
            return true;
        }

        return false;
    });
}
