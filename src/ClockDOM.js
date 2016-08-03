var ClockInterface = require('./ClockInterface');


function ClockDOM() {
    this.onColour = '#7277ff';
    this.offColour = '#161733';
    this.binaryTime;
    this._pixels = [];

    this._loadPixels();
}

ClockDOM.prototype = Object.create(ClockInterface);

(function (static_, proto_) {

    /*
     * Updates the clock's time, accepts a boolean array for the binary time.
     */
    proto_.updateTime = function (binaryTime) {
        this.binaryTime = binaryTime;
    };

    /*
     * Draws the clock to DOM.
     */
    proto_.draw = function () {
        this._forEachPixel(function (id) {
            var pixel = this._pixels[id];
            var bit = this.binaryTime[id];

            if (bit) {
                pixel.style.backgroundColor = this.onColour;
            }
            else {
                pixel.style.backgroundColor = this.offColour;
            }
        });
    };


    /*
     * Loads all the pixel elements from the DOM.
     */
    proto_._loadPixels = function () {
        var i;

        this._forEachPixel(function (id) {
            this._pixels.push(document.getElementById('pixel' + i));
        });
    };

    /*
     * For loop which loops through every pixel.
     */
    proto_._forEachPixel = function (callback) {
        var i;

        for (i = 0; i < 16; i += 1) {
            callback(i);
        }
    };

}(ClockDOM, ClockDOM.prototype));

module.exports = ClockDOM;
