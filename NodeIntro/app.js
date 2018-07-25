// let y = require("./arrHelp");
// y.pr([13,48,46,498,764,4]);
// console.log(y.add(321, 31));
// let fs = require('fs');
// // fs.writeFile('./xx.txt', 'hello world\n', {flag : 'a'}, function (err) {
// // });
// // fs.readFile('./xx.txt', function (err, data) {
// //     console.log(data.toString());
// // });
// //
// // fs.rename('./xx.txt', './eerg.txt', function (err) {
// // });
// // fs.writeFile("./xxx.txt", "wfwegwgwg", {flag :"a"}, function (err) {
// // });
// // fs.unlink("./xxx.txt", function (err) {
// //
// // });
// // fs.mkdir("./dir", function (err) {
// // });
// let writeStream = fs.createWriteStream('./writeStream.txt');
// for (let i = 0; i < 1e6; i++) {
//     writeStream.write("\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
// }
// let readStream = fs.createReadStream("./writeStream.txt");
// let copy = fs.createWriteStream('./copy.txt');
// // readStream.on("data", function (data) {
// //     console.log(data);
// //     copy.write(data);
// // });
// // readStream.on("end", function () {
// //     console.log("end");
// // });
// readStream.pipe(copy);
let querystring = require("querystring");
let http = require("http");
let fs = require("fs");
let url = require('url');
let server = http.createServer(function (req, res) {
    // res.writeHead(200,{
    //     "Content-Type" : "text/plain"
    // });
    let parsedUrl = url.parse(req.url);
    switch (parsedUrl.pathname){
        case '/' : {
            sendRes(res,{});
            break;
        }
        case '/about' : {
            sendRes(res,{
                path : "./about.html"
            });
            break
        }
        case "/create" : {
            // console.log(querystring.parse(parsedUrl.query));;
            req.on("data", function (data) {
                console.log(querystring.parse(data.toString()));
            });
            req.on("end", function () {
                sendRes(res, {});
            });
            // sendRes(res, {});
            break;
        }
    }
    // console.log("request");
    // res.write("eberheheh");
    // res.write("ergergheh");
    // res.write("nowefewgwegwg");
    // res.end("Hello");
});
server.listen(3000, function () {
    console.log("listening .... ");
});
function sendRes(res, options) {
   let path = options.path ? options.path : "./index.html";
    fs.createReadStream(path).pipe(res);
}
fs.rmdir("./dir", function (err) {

});