const fs = require("fs");

module.exports = function html(projectPath) {
    const myProjects = fs.readdirSync(projectPath, { withFileTypes: true });
    let htmlStart = `<!DOCTYPE html>
    <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8">
            <title>portfolio</title>
        </head>
        <body>
        <ul>`;
    let htmlBody = "";
    for (let i = 0; i < myProjects.length; i++) {
        htmlBody += `\n<li><a href=/${myProjects[i].name}>${myProjects[i].name}</a></li>`;
    }
    let htmlEnd = `
        </ul>
        </body>
    </html>`;
    return htmlStart + htmlBody + htmlEnd;
};
