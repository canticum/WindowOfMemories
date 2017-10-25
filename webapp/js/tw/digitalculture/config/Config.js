/* Generated from Java with JSweet 2.0.1-SNAPSHOT - http://www.jsweet.org */
var tw;
(function (tw) {
    var digitalculture;
    (function (digitalculture) {
        var config;
        (function (config) {
            var Config = (function () {
                function Config() {
                }
                return Config;
            }());
            config.Config = Config;
            Config["__class"] = "tw.digitalculture.config.Config";
            (function (Config) {
                var PROJECT = (function () {
                    function PROJECT() {
                    }
                    PROJECT.TITLE_$LI$ = function () { if (PROJECT.TITLE == null)
                        PROJECT.TITLE = Config.PROJECT.TITLE_MAIN + "\u2014" + Config.PROJECT.SUBTITLE; return PROJECT.TITLE; };
                    ;
                    return PROJECT;
                }());
                PROJECT.TITLE_MAIN = "\u8a18\u61b6\u7a97\u6afa";
                PROJECT.TITLE_ENGLISH = "The Window of Our Memories";
                PROJECT.SUBTITLE = "\u5171\u7bc9\u81fa\u4e2d\u5370\u8c61\u7684\u89d2\u843d";
                PROJECT.LOGO_PATH = "/element/logo_2.png";
                PROJECT.VERSION = "0.7.0-beta-jswt";
                Config.PROJECT = PROJECT;
                PROJECT["__class"] = "tw.digitalculture.config.Config.PROJECT";
                var UMBRA = (function () {
                    function UMBRA() {
                    }
                    return UMBRA;
                }());
                UMBRA.URL = "http://wm.localstudies.info";
                UMBRA.FONT = "\'DFKai-sb\', \'BiauKai\'";
                UMBRA.TITLE_COLOR = "Silver";
                UMBRA.QRCODE_IMG = null;
                Config.UMBRA = UMBRA;
                UMBRA["__class"] = "tw.digitalculture.config.Config.UMBRA";
                var LUNA = (function () {
                    function LUNA() {
                    }
                    LUNA.MIN_LOGO = function () {
                        return (((Config.LUNA.ROW * Config.LUNA.COLUMN) / 8 | 0));
                    };
                    LUNA.MOD = function (row) {
                        return (row > 2) ? 1 : ((row === 1) ? 0.7 : 0.95);
                    };
                    return LUNA;
                }());
                LUNA.COLUMN = 8;
                LUNA.ROW = 4;
                LUNA.FONT = "\'Yu Gothic\', SimHei";
                LUNA.FLIP_TIME_OUT = 5000;
                LUNA.SHOW_INTERVAL = 3000;
                LUNA.SHOW_STAY = 1500;
                LUNA.QRCODE = "@QR_CODE_TOKEN";
                LUNA.TEXT = "@TEXT_TOKEN";
                LUNA.TITLE_RATIO = 0.6;
                LUNA.TITLE_COLOR = "Silver";
                LUNA.TOP_HEIGHT_RATIO = 0.08;
                LUNA.BOTTOM_HEIGHT_RATIO = 0.04;
                Config.LUNA = LUNA;
                LUNA["__class"] = "tw.digitalculture.config.Config.LUNA";
                (function (LUNA) {
                    var CARD = (function () {
                        function CARD() {
                        }
                        CARD.BORDER_COLOR_$LI$ = function () { if (CARD.BORDER_COLOR == null)
                            CARD.BORDER_COLOR = ["Silver", "White"]; return CARD.BORDER_COLOR; };
                        ;
                        return CARD;
                    }());
                    CARD.BORDER_WIDTH = 10;
                    CARD.BORDER_STYLE = "inset";
                    CARD.COLOR = "#121212";
                    CARD.FONT = "Meiryo, \'\u5fae\u8edf\u6b63\u9ed1\u9ad4\', \'Microsoft JhengHei\'";
                    CARD.FONT_WEIGHT = "normal";
                    CARD.FONT_COLOR = "white";
                    LUNA.CARD = CARD;
                    CARD["__class"] = "tw.digitalculture.config.Config.LUNA.CARD";
                })(LUNA = Config.LUNA || (Config.LUNA = {}));
                var DATA = (function () {
                    function DATA() {
                    }
                    DATA.FILETYPES_$LI$ = function () { if (DATA.FILETYPES == null)
                        DATA.FILETYPES = ["jpg", "png"]; return DATA.FILETYPES; };
                    ;
                    DATA.LIMIT = function () {
                        return (((Config.LUNA.ROW * Config.LUNA.COLUMN) | 0) / 2 | 0);
                    };
                    return DATA;
                }());
                Config.DATA = DATA;
                DATA["__class"] = "tw.digitalculture.config.Config.DATA";
                (function (DATA) {
                    var TWDC = (function () {
                        function TWDC() {
                        }
                        return TWDC;
                    }());
                    TWDC.URL_BASE = "http://data.digitalculture.tw/taichung/oai?verb=ListRecords&metadataPrefix=oai_dc";
                    TWDC.URL_TOKEN = "http://data.digitalculture.tw/taichung/oai?verb=ListRecords&&resumptionToken=";
                    DATA.TWDC = TWDC;
                    TWDC["__class"] = "tw.digitalculture.config.Config.DATA.TWDC";
                    var IDEASQL = (function () {
                        function IDEASQL() {
                        }
                        return IDEASQL;
                    }());
                    IDEASQL.URL = "http://designav.io/api/image/search/";
                    IDEASQL.MULTI_URL = "http://designav.io/api/image/search_multi/";
                    IDEASQL.WB_URL = "http://designav.io/api/image/wordbreak/";
                    DATA.IDEASQL = IDEASQL;
                    IDEASQL["__class"] = "tw.digitalculture.config.Config.DATA.IDEASQL";
                })(DATA = Config.DATA || (Config.DATA = {}));
            })(Config = config.Config || (config.Config = {}));
        })(config = digitalculture.config || (digitalculture.config = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
tw.digitalculture.config.Config.DATA.FILETYPES_$LI$();
tw.digitalculture.config.Config.LUNA.CARD.BORDER_COLOR_$LI$();
tw.digitalculture.config.Config.PROJECT.TITLE_$LI$();
