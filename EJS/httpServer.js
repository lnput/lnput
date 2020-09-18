const http = require("http");
const url = require("url");
const ejs = require('ejs');
const fs = require('fs');
const querystring = require("querystring");

// var resJSON = {
//     "file": "index.html",
//     "title": "ejs-index",
//     "index": "首页"
// };
http.createServer((req,res) => {
    var reqInfo = req.url,
        reqStr = '';
    if (reqInfo.substr(0,1) === '/'){
        reqStr = (reqInfo.length === 1) ? 'index' : reqInfo.substr(1);

        res.writeHead(200, {
            'Content-Type': 'text/html' 
        });

        // 渲染文件 index.ejs
        ejs.renderFile(`${reqStr}.html`, {
            title: `ejs-${reqStr}`,  // 渲染的数据key: 对应到了ejs中的title
            index: '首页'},  // 渲染的数据key: 对应到了ejs中的index
            (err, data) => {
            if (err ) {
                console.log(err);
            } else {
                console.log(data);
                res.end(data);
            }
        })
    }
}).listen(54321);


// http.createServer((req, res) => {
//     
//     if (req.url === '/') {
//          res.writeHead(200, {
//              'Content-Type': 'text/html' 
//          });
//     // 渲染文件 index.ejs
//         ejs.renderFile('index.html', {
//             title: 'ejs-index',  // 渲染的数据key: 对应到了ejs中的title
//             index: '首页'},  // 渲染的数据key: 对应到了ejs中的index
//             (err, data) => {
//             if (err ) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//                 res.end(data);
//             }
//         })    
//     } else if (req.url === '/signIn'){
//     }
//     else if (req.url === '/signUp'){
        
//     }
// }).listen(54321);