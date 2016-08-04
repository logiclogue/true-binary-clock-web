/*
 * Manages the size of the clock for ClockDOM.
 */
function SizeManager() {
    var clockId = 'clock';

    this.body = document.querySelector('body');
    this.clock = document.getElementById(clockId);
}

(function (static_, proto_) {

    /*
     * Call to check and update the size of the clock.
     */
    proto_.update = function () {
        var width = window.innerWidth;
        var height = window.innerHeight;

        // Landscape
        if (width > height) {
            this.clock.style.width = height + 'px';
            this.clock.style.height = '100%';
            this.body.style.paddingLeft = ((width - height) / 2) + 'px';
            this.body.style.paddingTop = 0;
        }
        // Portrait
        else {
            this.clock.style.height = width + 'px';
            this.clock.style.width = '100%';
            this.clock.style.y = 100;
            this.body.style.paddingTop = ((height - width) / 2) + 'px';
            this.body.style.paddingLeft = '0px';
        }
    };

}(SizeManager, SizeManager.prototype));

module.exports = SizeManager;
