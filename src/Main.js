var ClockDOM = require('./ClockDOM');
var Time = require('./Time');
var SizeManager = require('./SizeManager');


/*
 * Main class.
 */
function Main() {
    this.time = new Time();
    this.clock = new ClockDOM();
    this.sizeManager = new SizeManager();
}

(function (static_, proto_) {

    /*
     * Initial method that is called to start the clock.
     */
    proto_.start = function () {
        this.time.getBinary();

        setInterval(this._interval.bind(this), 80);
    };

    /*
     * Updates time and clock. Looped.
     */
    proto_._interval = function () {
        this.time.date = new Date();
        var binaryTime = this.time.getBinary();

        this.sizeManager.update();
        this.clock.updateTime(binaryTime);
        this.clock.draw();
    };

}(Main, Main.prototype));

(function () {
    var main = new Main();

    main.start();
}());
