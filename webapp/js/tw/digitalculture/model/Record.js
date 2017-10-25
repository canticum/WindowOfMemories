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
             * @param {*} header
             * @param {*} metadata
             * @class
             */
            var Record = (function () {
                function Record(header, metadata) {
                    var _this = this;
                    this.subjects = ([]);
                    if (this.identifier === undefined)
                        this.identifier = null;
                    if (this.title === undefined)
                        this.title = null;
                    if (this.description === undefined)
                        this.description = null;
                    if (this.link === undefined)
                        this.link = null;
                    if (this.filetype === undefined)
                        this.filetype = null;
                    this.identifier = $(header).find("identifier").text();
                    this.title = $(metadata).find("dc\\:title").text();
                    $(metadata).find("dc\\:subject").each(function (i, s) {
                        return (_this.subjects.push(s.toString()) > 0);
                    });
                    this.description = $(metadata).find("dc\\:description").filter(function (i, o) {
                        return (!(function (str, searchString, position) {
                            if (position === void 0) { position = 0; }
                            return str.substr(position, searchString.length) === searchString;
                        })(o.toString(), "http://"));
                    }).text();
                    this.link = decodeURIComponent($(metadata).find("dc\\:description").filter(function (i, o) {
                        return ((function (str, searchString, position) {
                            if (position === void 0) { position = 0; }
                            return str.substr(position, searchString.length) === searchString;
                        })(o.toString(), "http://"));
                    }).text());
                    this.filetype = this.link.split(".")[this.link.split(".").length - 1];
                }
                Record.prototype.contains = function (keyword) {
                    var result = "";
                    if (this.subjects.length > 0) {
                        for (var index = 0; index < this.subjects.length; index++) {
                            if ((this.subjects[index].indexOf(keyword) != -1) && this.subjects[index].length > result.length) {
                                result = this.subjects[index];
                            }
                        }
                        ;
                        if (!(result.length === 0)) {
                            result += ':' + this.title + '\u3002' + this.description;
                        }
                    }
                    if ((this.title.indexOf(keyword) != -1)) {
                        result = this.title + '\u3002' + this.description;
                    }
                    else if ((this.description.indexOf(keyword) != -1)) {
                        result = this.description;
                    }
                    return result;
                };
                return Record;
            }());
            model.Record = Record;
            Record["__class"] = "tw.digitalculture.model.Record";
        })(model = digitalculture.model || (digitalculture.model = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
