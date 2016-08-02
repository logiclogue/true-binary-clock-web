/*
 * Provides the daily time in binary format.
 */
function Time() {
    this.date = new Date();
    this.decimal;
}

(function (static_, proto_) {

    /*
     * Gets the time as a decimal.
     */
    proto_.getDecimal = function () {
        var date = this.date;
        var milli = date.getMilliseconds() / 86400000;
        var second = date.getSeconds() / 86400;
        var minute = date.getMinutes() / 1440;
        var hour = date.getHours() / 24;

        this.decimal = milli + second + minute + hour;

        return this.decimal;
    };

    /*
     * Gets the time in a binary array.
     */
    proto_.getBinary = function () {
        var array = [];
        var decimalTime = this.getDecimal();
        var pow;
        var isOn;
        var i;
        var j;

        for (i = 1; i <= 16; i += 1) {
            pow = Math.pow(2, i);
            isOn = false;

            for (j = 1; j < pow; j += 2) {
                if (decimalTime >= j / pow && decimalTime < (j + 1) / pow) {
                    isOn = true;
                }
            }

            array[i - 1] = isOn;
        }

        return array;
    };

}(Time, Time.prototype));

module.exports = Time;
