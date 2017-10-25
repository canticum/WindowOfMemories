/* Generated from Java with JSweet 2.0.1-SNAPSHOT - http://www.jsweet.org */
var tw;
(function (tw) {
    var digitalculture;
    (function (digitalculture) {
        var model;
        (function (model) {
            /**
             *
             * @author Jonathan
             * @param {string} str
             * @param {string} img
             * @param {string} txt
             * @class
             */
            var Record_Display = (function () {
                function Record_Display(str, img, txt) {
                    if (this.query_str === undefined)
                        this.query_str = null;
                    if (this.img_path === undefined)
                        this.img_path = null;
                    if (this.content === undefined)
                        this.content = null;
                    if (this.used === undefined)
                        this.used = false;
                    this.query_str = str;
                    this.img_path = img;
                    this.content = txt;
                    this.used = false;
                }
                return Record_Display;
            }());
            model.Record_Display = Record_Display;
            Record_Display["__class"] = "tw.digitalculture.model.Record_Display";
        })(model = digitalculture.model || (digitalculture.model = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
