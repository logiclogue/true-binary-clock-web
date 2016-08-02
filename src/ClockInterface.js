/*
 * Interface for classes that manage the drawing of the clock.
 */
var ClockInterface = {
    /*
     * Updates the clock's time, accepts a boolean array for the binary time.
     */
    updateTime: function () {},
    
    /*
     * Draws the clock.
     */
    draw: function () {}
};

module.exports = ClockInterface;
