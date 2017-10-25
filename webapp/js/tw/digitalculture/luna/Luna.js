/* Generated from Java with JSweet 2.0.1-SNAPSHOT - http://www.jsweet.org */
var tw;
(function (tw) {
    var digitalculture;
    (function (digitalculture) {
        var luna;
        (function (luna_1) {
            /**
             *
             * @author Jonathan
             * @class
             */
            var Luna = (function () {
                function Luna() {
                    var _this = this;
                    if (this.socket === undefined)
                        this.socket = null;
                    console.info(tw.digitalculture.config.Config.PROJECT.TITLE_ENGLISH);
                    Luna.is_logo = tw.digitalculture.config.Config.LUNA.COLUMN * tw.digitalculture.config.Config.LUNA.ROW;
                    this.setup();
                    this.init_cards();
                    this.setup_socket();
                    setInterval(function (arg) { return _this.trigger_data(arg); }, tw.digitalculture.config.Config.LUNA.SHOW_INTERVAL);
                }
                Luna.data_pool_$LI$ = function () { if (Luna.data_pool == null)
                    Luna.data_pool = ({}); return Luna.data_pool; };
                ;
                Luna.deleted_keys_$LI$ = function () { if (Luna.deleted_keys == null)
                    Luna.deleted_keys = ([]); return Luna.deleted_keys; };
                ;
                Luna.main = function (args) {
                    $(document).ready(function () {
                        var luna = new Luna();
                        return null;
                    });
                };
                Luna.prototype.setup = function () {
                    $("title").text(tw.digitalculture.config.Config.PROJECT.TITLE_MAIN + " | " + tw.digitalculture.config.Config.PROJECT.TITLE_ENGLISH);
                    $(".box").css("color", tw.digitalculture.config.Config.LUNA.TITLE_COLOR);
                    var WT = window.screen.availWidth - 10;
                    var HT = window.screen.availHeight;
                    var top_height = HT * tw.digitalculture.config.Config.LUNA.TOP_HEIGHT_RATIO;
                    var bottom_height = HT * tw.digitalculture.config.Config.LUNA.BOTTOM_HEIGHT_RATIO;
                    Luna.SIDE = (WT / tw.digitalculture.config.Config.LUNA.COLUMN > (HT - top_height - bottom_height) / tw.digitalculture.config.Config.LUNA.ROW) ? (HT - top_height - bottom_height) / tw.digitalculture.config.Config.LUNA.ROW * tw.digitalculture.config.Config.LUNA.MOD(tw.digitalculture.config.Config.LUNA.ROW) - tw.digitalculture.config.Config.LUNA.CARD.BORDER_WIDTH * 2 : WT * tw.digitalculture.config.Config.LUNA.MOD(tw.digitalculture.config.Config.LUNA.COLUMN) / tw.digitalculture.config.Config.LUNA.COLUMN - tw.digitalculture.config.Config.LUNA.CARD.BORDER_WIDTH * 2;
                    $("#title_text").text(tw.digitalculture.config.Config.PROJECT.TITLE_$LI$());
                    $("#version_text").text("Ver. " + tw.digitalculture.config.Config.PROJECT.VERSION);
                    var font_size_top = (((tw.digitalculture.config.Config.PROJECT.TITLE_$LI$().length > WT / top_height) ? WT / top_height * tw.digitalculture.config.Config.LUNA.TITLE_RATIO : top_height * tw.digitalculture.config.Config.LUNA.TITLE_RATIO) | 0);
                    var font_size_bottom = ((bottom_height * tw.digitalculture.config.Config.LUNA.TITLE_RATIO) | 0);
                    $(".box").css("width", WT).css("font-family", tw.digitalculture.config.Config.LUNA.FONT);
                    $(".box.top").css("height", top_height).css("font-size", font_size_top + "px");
                    $(".box.bottom").css("height", bottom_height).css("font-size", font_size_bottom + "px");
                };
                Luna.prototype.init_cards = function () {
                    Luna.cards = ({});
                    for (var row = 0; row < tw.digitalculture.config.Config.LUNA.ROW; row++) {
                        var row_div = document.createElement("div");
                        $(row_div).addClass("row");
                        $("#display").append(row_div);
                        for (var col = 0; col < tw.digitalculture.config.Config.LUNA.COLUMN; col++) {
                            var id = row + "_" + col;
                            var card = new tw.digitalculture.luna.Card(id);
                            /* put */ (Luna.cards[id] = card);
                            $(row_div).append(card.card);
                        }
                        ;
                    }
                    ;
                    $(".row").css("height", Luna.SIDE + tw.digitalculture.config.Config.LUNA.CARD.BORDER_WIDTH * 2).css("width", (Luna.SIDE + tw.digitalculture.config.Config.LUNA.CARD.BORDER_WIDTH * 2) * tw.digitalculture.config.Config.LUNA.COLUMN);
                };
                /*private*/ Luna.prototype.setup_socket = function () {
                    var _this = this;
                    this.socket = io("?role=luna");
                    this.socket.on("fire", (function (data) { return _this.onFire(data); }));
                    this.socket.on("result", (function (data) { return _this.onResult(data); }));
                };
                Luna.prototype.onFire = function (data) {
                    if (Object.keys(Luna.data_pool_$LI$()).length > 0) {
                        this.deal_card$java_lang_String$java_lang_String$java_lang_String("*" + data["keyword"] + "*", (data["uri"]), (data["text"]));
                    }
                    this.deal_card();
                };
                Luna.prototype.onResult = function (data) {
                    var record_set = (data["record_set"]);
                    var replaced = 0;
                    for (var i = 0; i < record_set.length; i++) {
                        var record = new tw.digitalculture.model.Record_Display((data["query_str"]), record_set[i].img_url, record_set[i].content);
                        if (Luna.data_pool_$LI$().hasOwnProperty(record.query_str + record.img_path)) {
                            replaced++;
                        }
                        if (i === 0) {
                            this.deal_card$tw_digitalculture_model_Record_Display(record);
                        }
                        else {
                            /* put */ (Luna.data_pool_$LI$()[record.query_str + record.img_path] = record);
                        }
                    }
                    ;
                    console.info("data_pool size = " + Object.keys(Luna.data_pool_$LI$()).length + "(" + replaced + ")");
                };
                /**
                 * Trigger card dealing in the interval of LUNA.SHOW_INTERVAL.
                 * @param {*} arg
                 */
                Luna.prototype.trigger_data = function (arg) {
                    if (Object.keys(Luna.data_pool_$LI$()).length - Luna.deleted_keys_$LI$().length > 0 && Luna.is_locked < tw.digitalculture.config.Config.LUNA.COLUMN * tw.digitalculture.config.Config.LUNA.ROW) {
                        var key = "";
                        do {
                            var index = (((Math.random() * Object.keys(Luna.data_pool_$LI$()).length) - 1) | 0);
                            key = Object.keys(Luna.data_pool_$LI$()).slice(0)[index];
                            if ((function (m, k) { return m[k] === undefined ? null : m[k]; })(Luna.data_pool_$LI$(), key).used) {
                                /* remove */ delete Luna.data_pool_$LI$()[key];
                                key = "";
                            }
                        } while (((key.length === 0)));
                        var rec = (function (m, k) { return m[k] === undefined ? null : m[k]; })(Luna.data_pool_$LI$(), key);
                        rec.used = true;
                        /* add */ (Luna.deleted_keys_$LI$().push(key) > 0);
                        this.deal_card$tw_digitalculture_model_Record_Display(rec);
                    }
                    else {
                        if (Luna.deleted_keys_$LI$().length > 0) {
                            Luna.deleted_keys_$LI$().forEach(function (key) {
                                /* remove */ delete Luna.data_pool_$LI$()[key];
                            });
                            console.info(/* size */ Luna.deleted_keys_$LI$().length + " dumped. data_pool size = " + Object.keys(Luna.data_pool_$LI$()).length);
                            Luna.deleted_keys = ([]);
                        }
                        this.deal_card();
                    }
                };
                Luna.prototype.deal_card$ = function () {
                    this.deal_card$java_lang_String$java_lang_String$java_lang_String("", tw.digitalculture.config.Config.PROJECT.LOGO_PATH, tw.digitalculture.config.Config.LUNA.QRCODE);
                };
                Luna.prototype.deal_card$tw_digitalculture_model_Record_Display = function (record) {
                    this.deal_card$java_lang_String$java_lang_String$java_lang_String("[" + record.query_str + "]", record.img_path, record.content);
                };
                Luna.prototype.deal_card$java_lang_String$java_lang_String$java_lang_String = function (query_str, img_path, content) {
                    var c = null;
                    var row;
                    var col;
                    do {
                        row = ((tw.digitalculture.config.Config.LUNA.ROW * Math.random()) | 0);
                        col = ((tw.digitalculture.config.Config.LUNA.COLUMN * Math.random()) | 0);
                        c = (function (m, k) { return m[k] === undefined ? null : m[k]; })(Luna.cards, row + "_" + col);
                    } while ((c.locked || (!(function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(tw.digitalculture.config.Config.LUNA.QRCODE, content) && !c.is_logo && Luna.is_logo > tw.digitalculture.config.Config.LUNA.MIN_LOGO())));
                    var flip_card = c;
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(tw.digitalculture.config.Config.PROJECT.LOGO_PATH, img_path) || (function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(tw.digitalculture.config.Config.LUNA.QRCODE, content)) {
                        if (!flip_card.is_logo) {
                            Luna.is_logo++;
                            flip_card.is_logo = true;
                        }
                    }
                    else {
                        if (flip_card.is_logo) {
                            Luna.is_logo--;
                            flip_card.is_logo = false;
                        }
                    }
                    flip_card.locked = true;
                    Luna.is_locked++;
                    if ((function (o1, o2) { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(tw.digitalculture.config.Config.LUNA.QRCODE, content)) {
                        flip_card.flip(tw.digitalculture.config.Config.LUNA.QRCODE, 1);
                    }
                    else {
                        var text = query_str + " " + content;
                        flip_card.flip(flip_card.draw_text(text), 1);
                    }
                    setTimeout((function (flip_card) {
                        return function (o1) {
                            flip_card.flip(img_path, 0);
                            setTimeout(function (o2) {
                                flip_card.locked = false;
                                Luna.is_locked--;
                            }, /* equals */ (function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(tw.digitalculture.config.Config.PROJECT.LOGO_PATH, img_path) ? (tw.digitalculture.config.Config.LUNA.SHOW_STAY / 3 | 0) : tw.digitalculture.config.Config.LUNA.SHOW_STAY);
                        };
                    })(flip_card), tw.digitalculture.config.Config.LUNA.FLIP_TIME_OUT);
                };
                Luna.prototype.deal_card = function (query_str, img_path, content) {
                    if (((typeof query_str === 'string') || query_str === null) && ((typeof img_path === 'string') || img_path === null) && ((typeof content === 'string') || content === null)) {
                        return this.deal_card$java_lang_String$java_lang_String$java_lang_String(query_str, img_path, content);
                    }
                    else if (((query_str != null && query_str instanceof tw.digitalculture.model.Record_Display) || query_str === null) && img_path === undefined && content === undefined) {
                        return this.deal_card$tw_digitalculture_model_Record_Display(query_str);
                    }
                    else if (query_str === undefined && img_path === undefined && content === undefined) {
                        return this.deal_card$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                return Luna;
            }());
            Luna.SIDE = 0;
            Luna.cards = null;
            Luna.is_logo = 0;
            Luna.qr_code = null;
            Luna.is_locked = 0;
            luna_1.Luna = Luna;
            Luna["__class"] = "tw.digitalculture.luna.Luna";
        })(luna = digitalculture.luna || (digitalculture.luna = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
tw.digitalculture.luna.Luna.deleted_keys_$LI$();
tw.digitalculture.luna.Luna.data_pool_$LI$();
tw.digitalculture.luna.Luna.main(null);
