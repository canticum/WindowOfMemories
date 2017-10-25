/* Generated from Java with JSweet 2.0.1-SNAPSHOT - http://www.jsweet.org */
var tw;
(function (tw) {
    var digitalculture;
    (function (digitalculture) {
        var luna;
        (function (luna) {
            var Card = (function () {
                function Card(id) {
                    var _this = this;
                    this.font_size = ((tw.digitalculture.luna.Luna.SIDE / 10) | 0);
                    if (this.id === undefined)
                        this.id = null;
                    if (this.front_face === undefined)
                        this.front_face = null;
                    if (this.front_img === undefined)
                        this.front_img = null;
                    if (this.locked === undefined)
                        this.locked = null;
                    if (this.is_logo === undefined)
                        this.is_logo = null;
                    if (this.card === undefined)
                        this.card = null;
                    this.id = id;
                    this.locked = false;
                    this.is_logo = true;
                    this.card = this.refresh_card_div();
                    this.create_face(tw.digitalculture.config.Config.PROJECT.LOGO_PATH, function (face) {
                        _this.front_face = face;
                        $(face).addClass("face flip in front");
                        $(_this.card).append(face);
                    });
                }
                Card.prototype.refresh_card_div = function () {
                    var c = document.createElement("div");
                    $(c).addClass("card viewport-flip left");
                    $(c).attr("id", this.id);
                    $(c).css("width", tw.digitalculture.luna.Luna.SIDE).css("height", tw.digitalculture.luna.Luna.SIDE).css("border", tw.digitalculture.config.Config.LUNA.CARD.BORDER_WIDTH + "px " + tw.digitalculture.config.Config.LUNA.CARD.BORDER_STYLE + " " + tw.digitalculture.config.Config.LUNA.CARD.BORDER_COLOR_$LI$()[0]);
                    return c;
                };
                Card.DEG = function (ori) {
                    switch ((ori)) {
                        case 3:
                            return "180";
                        case 6:
                            return "90";
                        case 8:
                            return "-90";
                        default:
                            return "0";
                    }
                };
                /*private*/ Card.prototype.create_face = function (path, callback) {
                    var _this = this;
                    var card_face = document.createElement("div");
                    $(card_face).css("width", tw.digitalculture.luna.Luna.SIDE).css("height", tw.digitalculture.luna.Luna.SIDE).css("background-color", tw.digitalculture.config.Config.LUNA.CARD.COLOR);
                    $(card_face).addClass("face");
                    tw.digitalculture.luna.ExifReader.getOrientation(path, function (ori, img_source) {
                        _this.front_img = document.createElement("img");
                        $(_this.front_img).css("transform", "rotate(" + Card.DEG(ori) + "deg)");
                        _this.front_img.crossOrigin = "anonymous";
                        _this.front_img.src = ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(tw.digitalculture.config.Config.LUNA.QRCODE, path)) ? tw.digitalculture.config.Config.UMBRA.QRCODE_IMG : ((function (str, searchString, position) {
                            if (position === void 0) { position = 0; }
                            return str.substr(position, searchString.length) === searchString;
                        })(path, tw.digitalculture.config.Config.LUNA.TEXT)) ? path.substring(tw.digitalculture.config.Config.LUNA.TEXT.length) : img_source;
                        _this.front_img.onload = function (e) {
                            $(_this.front_img).addClass("img");
                            $(card_face).append(_this.front_img);
                            (function (target) { return (typeof target === 'function') ? target(card_face) : target.accept(card_face); })(callback);
                            return null;
                        };
                    });
                };
                Card.prototype.flip = function (img, color_index) {
                    var _this = this;
                    this.create_face(img, function (back_face) {
                        $(back_face).addClass("flip out");
                        $(_this.front_face).toggleClass("in").toggleClass("out");
                        setTimeout(function (o1) {
                            $(_this.card).append(back_face);
                            $(back_face).toggleClass("out").toggleClass("in");
                            $(_this.card).find(".front").remove();
                            $(back_face).toggleClass("front");
                            _this.front_face = back_face;
                            setTimeout(function (o2) {
                                $(_this.card).css("border", tw.digitalculture.config.Config.LUNA.CARD.BORDER_WIDTH + "px " + tw.digitalculture.config.Config.LUNA.CARD.BORDER_STYLE + " " + tw.digitalculture.config.Config.LUNA.CARD.BORDER_COLOR_$LI$()[color_index]);
                            }, 175);
                        }, 225);
                    });
                };
                Card.prototype.draw_text = function (text) {
                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
                    ctx.canvas.width = tw.digitalculture.luna.Luna.SIDE;
                    ctx.canvas.height = tw.digitalculture.luna.Luna.SIDE;
                    ctx.fillStyle = tw.digitalculture.config.Config.LUNA.CARD.COLOR;
                    ctx.fillRect(0, 0, tw.digitalculture.luna.Luna.SIDE, tw.digitalculture.luna.Luna.SIDE);
                    ctx.font = tw.digitalculture.config.Config.LUNA.CARD.FONT_WEIGHT + " " + this.font_size + "px " + tw.digitalculture.config.Config.LUNA.CARD.FONT;
                    ctx.fillStyle = tw.digitalculture.config.Config.LUNA.CARD.FONT_COLOR;
                    var margin = this.font_size * 0.8;
                    var y = margin + this.font_size;
                    var textArray = (eval("Array.from(text);"));
                    var substr = "";
                    for (var i = 0; i < textArray.length; i++) {
                        substr += textArray[i];
                        var substr_width = (ctx.measureText(substr).width | 0);
                        if (substr_width > tw.digitalculture.luna.Luna.SIDE - margin * 3 || i === text.length - 1) {
                            ctx.fillText(substr, margin, y);
                            substr = "";
                            y += this.font_size * 1.2;
                            if (y > tw.digitalculture.luna.Luna.SIDE - margin) {
                                break;
                            }
                        }
                    }
                    ;
                    return tw.digitalculture.config.Config.LUNA.TEXT + canvas.toDataURL("image/png");
                };
                return Card;
            }());
            luna.Card = Card;
            Card["__class"] = "tw.digitalculture.luna.Card";
        })(luna = digitalculture.luna || (digitalculture.luna = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
