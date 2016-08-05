/*
 * Manages the size of the clock for ClockDOM.
 */
function SizeManager() {
    var clockId = 'clock';

    this.body = document.querySelector('body');
    this.clock = document.getElementById(clockId);
    this.width;
    this.height;
}

(function (static_, proto_) {

    /*
     * Call to check and update the size of the clock.
     */
    proto_.update = function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var isWidthChange = this.width !== width;
        var isHeightChange = this.height !== height;
        var isLandscape = width > height;

        // If no change, return.
        if (!isWidthChange && !isHeightChange) {
            return;
        }

        // Change size
        this.width = width;
        this.height = height;
        
        this._changeSize();
    };


    /*
     * Calculates the size and the position depending on whether it is portrait
     * or landscape.
     */
    proto_._changeSize = function () {
        var isLandscape = this.width > this.height;
        var width;
        var height;
        var y;
        var paddingLeft;
        var paddingTop;

        if (isLandscape) {
            width = this.height + 'px';
            height = '100%';
            paddingLeft = ((this.width - this.height) / 2) + 'px';
            paddingTop = 0;
        }
        else {
            width = '100%';
            height = this.width + 'px';
            y = 100;
            paddingLeft = '0px';
            paddingTop = ((this.height - this.width) / 2) + 'px';
        }

        this._setStyle(width, height, y, paddingLeft, paddingTop);
    };

    /*
     * Sets the positioning and size of the clock and body.
     */
    proto_._setStyle = function (width, height, y, paddingLeft, paddingTop) {
        this.clock.style.width = width;
        this.clock.style.height = height;
        this.clock.style.y = y || 0;
        this.body.style.paddingLeft = paddingLeft;
        this.body.style.paddingTop = paddingTop;
    }

}(SizeManager, SizeManager.prototype));

module.exports = SizeManager;
