/*
 * Interface for time classes. Provides the time in a binary and decimal format.
 */
var TimeInterface = {
    /*
     * Date object for storing the date/time.
     */
    date: {},

    /*
     * Returns the this.date time as a decimal of the day.
     * e.g. 0.25 = 6 am.
     */
    getDecimal: function () {},

    /*
     * Returns the decimal time as a 16 bit binary boolean array.
     */
    getBinary: function () {}
};

module.exports = TimeInterface;
