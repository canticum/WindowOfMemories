/* Generated from Java with JSweet 2.0.1-SNAPSHOT - http://www.jsweet.org */
var tw;
(function (tw) {
    var digitalculture;
    (function (digitalculture) {
        var luna;
        (function (luna) {
            /**
             *
             * @author Jonathan
             * @class
             */
            var ExifReader = (function () {
                function ExifReader() {
                }
                ExifReader.loadXHR = function (url, callback) {
                    try {
                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", url, true);
                        xhr.responseType = "blob";
                        xhr.onerror = function (e) {
                            console.info("Network error.");
                            (function (target) { return (typeof target === 'function') ? target(null) : target.accept(null); })(callback);
                            return null;
                        };
                        xhr.onload = (function (xhr) {
                            return function (e) {
                                if (xhr.status === 200) {
                                    (function (target) { return (typeof target === 'function') ? target(xhr.response) : target.accept(xhr.response); })(callback);
                                }
                                else {
                                    console.info("Loading error:");
                                    (function (target) { return (typeof target === 'function') ? target(null) : target.accept(null); })(callback);
                                }
                                return null;
                            };
                        })(xhr);
                        xhr.send();
                    }
                    catch (e) {
                        (function (target) { return (typeof target === 'function') ? target(null) : target.accept(null); })(callback);
                        console.info("Exception.");
                    }
                    ;
                };
                ExifReader.getOrientation = function (img_path, callback) {
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
                    } })(tw.digitalculture.config.Config.LUNA.QRCODE, img_path) || (function (str, searchString, position) {
                        if (position === void 0) { position = 0; }
                        return str.substr(position, searchString.length) === searchString;
                    })(img_path, tw.digitalculture.config.Config.LUNA.TEXT)) {
                        (function (target) { return (typeof target === 'function') ? target(0, img_path) : target.accept(0, img_path); })(callback);
                        return;
                    }
                    ExifReader.loadXHR(img_path, function (img) {
                        if (img == null) {
                            (function (target) { return (typeof target === 'function') ? target(0, img_path) : target.accept(0, img_path); })(callback);
                            return;
                        }
                        var reader = new FileReader();
                        reader.readAsArrayBuffer(img);
                        reader.onload = function (e) {
                            var view = new DataView((e.target["result"]));
                            ExifReader.arrayBufferToString(view.buffer, function (data) {
                                var result = (function (str, searchString, position) {
                                    if (position === void 0) { position = 0; }
                                    return str.substr(position, searchString.length) === searchString;
                                })(img_path, "http://") ? "data:image/png;base64," + data : img_path;
                                if (view.getUint16(0, false) !== 65496) {
                                    (function (target) { return (typeof target === 'function') ? target(-2, result) : target.accept(-2, result); })(callback);
                                    return;
                                }
                                var length = view.byteLength;
                                var offset = 2;
                                var _loop_1 = function () {
                                    var marker = view.getUint16(offset, false);
                                    offset += 2;
                                    if (marker === 65505) {
                                        if (view.getUint32(offset += 2, false) !== 1165519206) {
                                            (function (target) { return (typeof target === 'function') ? target(-1, result) : target.accept(-1, result); })(callback);
                                            return { value: void 0 };
                                        }
                                        var little_1 = view.getUint16(offset += 6, false) === 18761;
                                        offset += view.getUint32(offset + 4, little_1);
                                        var tags = view.getUint16(offset, little_1);
                                        offset += 2;
                                        var _loop_2 = function (i) {
                                            if (view.getUint16(offset + (i * 12), little_1) === 274) {
                                                (function (target) { return (typeof target === 'function') ? target((view.getUint16(offset + (i * 12) + 8, little_1) | 0), result) : target.accept((view.getUint16(offset + (i * 12) + 8, little_1) | 0), result); })(callback);
                                                return { value: void 0 };
                                            }
                                        };
                                        for (var i = 0; i < tags; i++) {
                                            var state_1 = _loop_2(i);
                                            if (typeof state_1 === "object")
                                                return state_1;
                                        }
                                        ;
                                    }
                                    else if (((marker | 0) & 65280) !== 65280) {
                                        return "break";
                                    }
                                    else {
                                        offset += view.getUint16(offset, false);
                                    }
                                };
                                while ((offset < length)) {
                                    var state_2 = _loop_1();
                                    if (typeof state_2 === "object")
                                        return state_2.value;
                                    if (state_2 === "break")
                                        break;
                                }
                                ;
                                (function (target) { return (typeof target === 'function') ? target(-1, result) : target.accept(-1, result); })(callback);
                            });
                            return null;
                        };
                    });
                };
                /*private*/ ExifReader.arrayBufferToString = function (buffer, cb) {
                    (function (target) { return (typeof target === 'function') ? target(btoa((new Uint8Array(buffer).reduce(function (data, b, p3, p4) {
                        return data + String.fromCharCode(/* intValue */ (b | 0));
                    }, "")))) : target.accept(btoa((new Uint8Array(buffer).reduce(function (data, b, p3, p4) {
                        return data + String.fromCharCode(/* intValue */ (b | 0));
                    }, "")))); })(cb);
                };
                return ExifReader;
            }());
            luna.ExifReader = ExifReader;
            ExifReader["__class"] = "tw.digitalculture.luna.ExifReader";
        })(luna = digitalculture.luna || (digitalculture.luna = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
