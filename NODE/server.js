const http = require("http");
// const url = require("url");
// const ejs = require('ejs');
// const fs = require('fs');
const querystring = require("querystring");

var html1 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>登陆提示</title>
</head>

<body>`
var html2 = `
    <hr><p>你已成功登陆！</p>
</body>

</html>`

var server = http.createServer(function (req, res) {
    if (req.url == "/" && req.method == "POST") {
        var postData = "";
        req.addListener("data", function (chunk) {
            postData += chunk;
        });

        req.addListener("end", function () {
            var str = postData.toString();
            var queryObj = querystring.parse(str);
            var name = queryObj.name;
            var age = queryObj.age;
            var sex = queryObj.sex;
            var html = html1 + `
                <h2>个人信息</h2><hr>
                <p>姓名：${name}</p>
                <p>年龄：${age}</p>
                <p>爱好：${sex}</p>
            ` + html2;
            console.log("有新的表单提交")
            console.log("欢迎" + name + "加入\n");
            res.end(html);
        });
    }
});

server.listen(54321, "127.0.0.1");