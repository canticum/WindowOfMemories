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
             * @param {string} url
             * @param {string} text
             * @class
             */
            var Record_Query = (function () {
                function Record_Query(url, text) {
                    if (this.img_url === undefined)
                        this.img_url = null;
                    if (this.content === undefined)
                        this.content = null;
                    this.img_url = url;
                    this.content = text;
                }
                return Record_Query;
            }());
            model.Record_Query = Record_Query;
            Record_Query["__class"] = "tw.digitalculture.model.Record_Query";
        })(model = digitalculture.model || (digitalculture.model = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
