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
             * @param {string} client
             * @param {string} query_string
             * @class
             */
            var Result = (function () {
                function Result(client, query_string) {
                    if (this.client === undefined)
                        this.client = null;
                    if (this.query_str === undefined)
                        this.query_str = null;
                    if (this.record_set === undefined)
                        this.record_set = null;
                    this.client = client;
                    this.query_str = query_string;
                    this.record_set = ([]);
                }
                return Result;
            }());
            model.Result = Result;
            Result["__class"] = "tw.digitalculture.model.Result";
        })(model = digitalculture.model || (digitalculture.model = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
