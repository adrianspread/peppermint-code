const http = require("http");
const fs = require("fs");
const path = require("path");
const projectDir = __dirname + "/projects";
const createHtml = require("./generatelist.js");
let myHtml = createHtml(projectDir);

const contentType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".jston": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml"
};
// contentType.hasOwnProperty(".html");
//
// console.log("whatAmI: ", whatAmI);

http.createServer((req, res) => {
    req.on("error", err => console.log("error in req", err));
    res.on("error", err => console.log("error in res", err));

    // const readStream = fs.createReadStream(__dirname + '/projects/panes/panes.css');
    // readStream.pipe(res);

    if (req.method != "GET") {
        console.log("Not a get request....");
        res.statusCode = 405;
        return res.end();
    }

    if (req.url === "/") {
        return res.end(myHtml);
    }

    // console.log("req.url: ", req.url);
    // console.log("/projects/../../config/passwords.txt");
    // console.log(path.normalize("/projects/../../config/passwords.txt"));

    const filePath = __dirname + "/projects" + req.url;

    if (!path.normalize(filePath).startsWith(__dirname + "/projects")) {
        res.statusCode = 403;
        console.log("INTRUDER!!!");
        return res.end();
    }

    // console.log("filePath: ", filePath);

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("err in stat: ", err);
            res.statusCode = 404;
            return res.end();
        }
        if (stats.isFile()) {
            console.log("it's a file!!!! -> path is: ", filePath);
            if (contentType[path.extname(filePath)]) {
                res.setHeader(
                    "Content-Type",
                    contentType[path.extname(filePath)]
                );
                const readStream = fs.createReadStream(filePath);
                readStream.pipe(res);
                readStream.on("error", err => {
                    console.log("err in readStream: ", err);
                    res.statusCode = 500;
                    return res.end();
                });
            }
        } else {
            if (req.url.endsWith("/")) {
                const readStream = fs.createReadStream(filePath + "index.html");
                res.setHeader("Content-Type", "text/html");
                readStream.pipe(res);
                readStream.on("error", err => {
                    console.log("err in readStream: ", err);
                    res.statusCode = 500;
                    return res.end();
                });
            } else {
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                return res.end();
            }
        }
    });
}).listen(8080, () => console.log("My portfolio is up and running...."));
