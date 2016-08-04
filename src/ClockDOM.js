var ClockInterface = require('./ClockInterface');
var SizeManager = require('./SizeManager');


/*
 * Responsible for drawing the clock to the DOM.
 */
function ClockDOM() {
    this.onColour = '#7277ff';
    this.offColour = '#161733';
    this.binaryTime;
    this._pixels = [];
    this._sizeManager = new SizeManager();

    this._loadPixels();
}

// Implements ClockInterface
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
        this._sizeManager.update();

        this._forEachPixel(function (id) {
            var pixel = this._pixels[id];
            var bit = this.binaryTime[id];

            if (bit) {
                pixel.style.backgroundColor = this.onColour;
            }
            else {
                pixel.style.backgroundColor = this.offColour;
            }
        }.bind(this));
    };


    /*
     * Loads all the pixel elements from the DOM.
     */
    proto_._loadPixels = function () {
        var i;

        this._forEachPixel(function (i) {
            var element = document.getElementById('pixel' + i);

            this._pixels.push(element);
        }.bind(this));
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
