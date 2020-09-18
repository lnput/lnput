const http = require("http");
const url = require("url");
const ejs = require('ejs');
const fs = require('fs');
const querystring = require("querystring");

var server = http.createServer(function (req, res) {
    if (req.url == "/Resources" && req.method == "POST") {
        var postData = "";
        req.addListener("data", function (chunk) {
            postData += chunk;
        });

        ejs.renderFile(`index.html`, {
            title: `ejs-index`,  // 渲染的数据key: 对应到了ejs中的title
            index: '首页',  // 渲染的数据key: 对应到了ejs中的index
            (err, data) => {
                if (err ) {
                    console.log(err);
                } else {
                    console.log(data);
                    res.end(data);
                }
            }
        })

        // req.addListener("end", function () {
        //     var str = postData.toString();
        //     var queryObj = querystring.parse(str);
        //     var name = queryObj.name;
        //     var age = queryObj.age;
        //     var sex = queryObj.sex;
        //     console.log("有新的表单提交")
        //     console.log("欢迎" + name + "加入\n");
        //     res.end(data);
        // });
    }
});

server.listen(54321, "127.0.0.1");