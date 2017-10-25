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
             * @class
             */
            var Admin = (function () {
                function Admin() {
                    this.number = 1;
                    if (this.keyword_elements === undefined)
                        this.keyword_elements = null;
                    if (this.ideasql_pool_size === undefined)
                        this.ideasql_pool_size = 0;
                    if (this.socket === undefined)
                        this.socket = null;
                    if (this.current === undefined)
                        this.current = null;
                    this.setupSocket();
                    this.setup();
                }
                Admin.main = function (args) {
                    $(document).ready(function () {
                        if (Admin.admin == null) {
                            Admin.admin = new Admin();
                        }
                        return null;
                    });
                };
                /*private*/ Admin.prototype.setup = function () {
                    var _this = this;
                    this.keyword_elements = ({});
                    this.current = $("#current");
                    for (var i = 0; i < this.number; i++) {
                        var keyword = new tw.digitalculture.admin.Keyword("keyword" + i);
                        /* put */ (this.keyword_elements[keyword._id] = keyword);
                        $("#keyword_panel").append(keyword.getHTMLElement());
                    }
                    ;
                    $("#submit").on("click", function (e, o) { return _this.submitHandler(e, o); });
                    $("#update").on("click", function (e, o) { return _this.updateHandler(e, o); }).click();
                };
                /*private*/ Admin.prototype.submitHandler = function (e, o) {
                    var _this = this;
                    /* keySet */ Object.keys(this.keyword_elements).forEach(function (key) {
                        var word = (function (m, k) { return m[k] === undefined ? null : m[k]; })(_this.keyword_elements, key).word;
                        console.info(word + " added.");
                        _this.socket.emit("keyword", JSON.parse("{\"keyword\":\"" + word + "\"}"));
                        _this.socket.emit("keyword_query");
                    });
                    return null;
                };
                /*private*/ Admin.prototype.updateHandler = function (e, o) {
                    this.socket.emit("keyword_query");
                    return null;
                };
                /*private*/ Admin.prototype.updateCurrent = function (word) {
                    this.current.children().remove();
                    var div = document.createElement("div");
                    $(div).text(word);
                    this.current.append(div);
                };
                /*private*/ Admin.prototype.setupSocket = function () {
                    var _this = this;
                    this.socket = io("?role=admin");
                    this.socket.on("keyword_current", (function (data) {
                        _this.updateCurrent(data["keyword"].toString());
                    }));
                };
                return Admin;
            }());
            Admin.admin = null;
            admin.Admin = Admin;
            Admin["__class"] = "tw.digitalculture.admin.Admin";
        })(admin = digitalculture.admin || (digitalculture.admin = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
tw.digitalculture.admin.Admin.main(null);
