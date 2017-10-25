/* Generated from Java with JSweet 2.0.1-SNAPSHOT - http://www.jsweet.org */
var tw;
(function (tw) {
    var digitalculture;
    (function (digitalculture) {
        var admin;
        (function (admin) {
            /**
             *
             * @author Jonathan
             * @param {string} id
             * @param {string} word
             * @class
             */
            var Keyword = (function () {
                function Keyword(id, word) {
                    var _this = this;
                    if (((typeof id === 'string') || id === null) && ((typeof word === 'string') || word === null)) {
                        var __args = Array.prototype.slice.call(arguments);
                        if (this._id === undefined)
                            this._id = null;
                        if (this.word === undefined)
                            this.word = null;
                        if (this.input === undefined)
                            this.input = null;
                        if (this._id === undefined)
                            this._id = null;
                        if (this.word === undefined)
                            this.word = null;
                        if (this.input === undefined)
                            this.input = null;
                        (function () {
                            _this._id = id;
                            _this.word = word;
                            _this.input = document.createElement("input");
                            $(_this.input).attr("id", _this._id).val(word);
                            _this.input.placeholder = "\u8acb\u8f38\u5165\u9810\u8a2d\u95dc\u9375\u5b57";
                            $(_this.input).on("change", function (e, o) { return _this.handler(e, o); });
                        })();
                    }
                    else if (((typeof id === 'string') || id === null) && word === undefined) {
                        var __args = Array.prototype.slice.call(arguments);
                        {
                            var __args_1 = Array.prototype.slice.call(arguments);
                            var word_1 = "";
                            if (this._id === undefined)
                                this._id = null;
                            if (this.word === undefined)
                                this.word = null;
                            if (this.input === undefined)
                                this.input = null;
                            if (this._id === undefined)
                                this._id = null;
                            if (this.word === undefined)
                                this.word = null;
                            if (this.input === undefined)
                                this.input = null;
                            (function () {
                                _this._id = id;
                                _this.word = word_1;
                                _this.input = document.createElement("input");
                                $(_this.input).attr("id", _this._id).val(word_1);
                                _this.input.placeholder = "\u8acb\u8f38\u5165\u9810\u8a2d\u95dc\u9375\u5b57";
                                $(_this.input).on("change", function (e, o) { return _this.handler(e, o); });
                            })();
                        }
                    }
                    else
                        throw new Error('invalid overload');
                }
                /*private*/ Keyword.prototype.handler = function (e, o) {
                    this.word = this.input.value;
                    return null;
                };
                Keyword.prototype.getHTMLElement = function () {
                    return this.input;
                };
                return Keyword;
            }());
            admin.Keyword = Keyword;
            Keyword["__class"] = "tw.digitalculture.admin.Keyword";
        })(admin = digitalculture.admin || (digitalculture.admin = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
