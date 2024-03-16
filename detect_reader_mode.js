const isProbablyReaderable = require("@mozilla/readability").isProbablyReaderable;
const { JSDOM } = require('jsdom');

var fs = require('fs')
    , filename = "list_clean.txt";
fs.readFile(filename, 'utf8', async function (err, data) {
    if (err) throw err;

    lines = data.split(/\r?\n/);
    readableURL = [];

    for (let i = 0; i <= lines.length; i++) {
        await JSDOM.fromURL(lines[i]).then(dom => {
            if (isProbablyReaderable(dom.window.document)) {
                let nr = i + 2;
                let exportedLine = nr + ". " + lines[i];
                readableURL.push(exportedLine);
            }
        })
            .catch((err) => {
                let nr = i + 2;
                let exportedLine = "ERROR - " + nr + ". " + lines[i];
                readableURL.push(exportedLine);
            });
    }

    fs.writeFile("mozilla_readable_url.txt", readableURL.join("\n"), (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully");
        }
    });
});

