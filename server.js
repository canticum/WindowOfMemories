/* global __dirname */
'use strict';
var express = require('express');
var app = express();
app.use(express.static('webapp/lunaroot'));
app.use(express.static('webapp/umbraroot'));
app.use(express.static('webapp/admin'));
app.use(express.static('webapp/js/tw/digitalculture'));
app.use(express.static('node_modules'));
app.get('/:page?', function (req, res) {
    var path = require("path");
    switch (req.params.page) {
        case 'favicon.ico':
            res.sendFile(path.join(__dirname + '/favicon.ico'));
            break;
        case 'luna':
            res.sendFile(path.join(__dirname + '/webapp/lunaroot/luna.html'));
            break;
        case 'admin':
            res.sendFile(path.join(__dirname + '/webapp/admin/admin.html'));
            break;
        case undefined:
            res.sendFile(path.join(__dirname + '/webapp/umbraroot/umbra.html'));
            break;
        default:
//            res.sendFile(path.join(__dirname + '/webapp/' + req.params.page));
    }
});
var server = require('http').createServer(app);
var port = process.env.port || process.env.PORT || 1337;
//var port = process.env.port || process.env.npm_package_config_LOCAL_PORT;
var io = require('socket.io')(server);
var cf = require('./config.js');
var keyword = "文化局";
var dc = require('./libs/DataCenter')(cf.DATA.LIMIT, () => {
    io.on('connection', function (client) {
        console.log(client.id + "_" + client.handshake.query.role + "_connection");
        client.on('query', function (data) {
            dc.getResult(data, (result) => {
                var data_package = result;
                var result_str = (data_package.record_set.length === 0) ?
                        '抱歉，' + data.text + ' 沒有找到任何內容。'
                        : data.text + ' 取得' + data_package.record_set.length + '筆內容。';
                console.log(result_str);
                io.emit('message', {
                    user: data.client,
                    message: result_str
                });
                if (data_package.record_set.length > 0)
                    io.emit('result', data_package);
            });
        });
        client.on('disconnect', function () {
            console.log("disconnect");
        });
        client.on('keyword', function (data) {
            if (data.keyword)
                keyword = data.keyword;
        });
        client.on('keyword_query', function () {
            io.emit('keyword_current', {keyword: keyword});
        });
    });

    setInterval(function () {
        var data = {
            client: 'Server',
            text: keyword
        };
        dc.getResult(data, (result) => {
            var select = result.record_set[parseInt(result.record_set.length * Math.random())];
            io.emit('fire', {
                user: "Server",
                keyword: keyword,
                uri: select.img_url,
                text: select.content});
        });
    }, cf.LUNA.SYSTEM_LOGO_TIME_OUT);

    console.log("Server listening to port: " + port);
    server.listen(port);
});



