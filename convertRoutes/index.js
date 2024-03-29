const router = require('express').Router();
const childProcess = require('child_process');
const path = require("path");

const production = true;
const domain = (production)?"http://ec2-3-94-79-211.compute-1.amazonaws.com:4000/":"http://localhost:4000/";
const download_url_slice = `${domain}download/`;


router.post('/pdf', (req, res) => {
    const pyProcess = childProcess.spawn('python3', [path.join(__dirname + '/../twitterScript/main.py'), req.body.url.toString(), 'pdf']);
    pyProcess.stderr.pipe(process.stderr);
    pyProcess.stdout.on('data', (data) => {
        data = data.toString()
        switch (data.slice(0, 3)) {
            case "END":
                res.send(download_url_slice + data.slice(3))
                break;
            case "CRF":
                req.io.emit("statusCode", "creating file...");
                break;
            case "PTF":
                console.log("PTF");
                req.io.emit("statusCode", "proceeding to fetch tweets...");
                // TODO: send "proceeding to tweet fetch"
                break;
            case "FTW":
                const dataSplitted = data.split(":");
                req.io.emit("statusCode", `fetching tweet ${dataSplitted[1]}`);
                // TODO: send "Fetchning tweet N"
                break;
            case "PRO":
                req.io.emit("statusCode", "processing tweets...");
                // TODO: send "processing tweets"
                break;
            case "MRG":
                req.io.emit("statusCode", "merging tweets...");
                // TODO send "merging tweets"
                break;
            case "ERR":
                req.io.emit("statusCode", "ERR");
                break;
            default:
                console.log("raise error");
            // TODO: do something
        }
    });
});

router.post('/txt', (req, res) => {
    const pyProcess = childProcess.spawn('python3', [path.join(__dirname + '/../twitterScript/main.py'), req.body.url.toString(), 'txt']);
    pyProcess.stderr.pipe(process.stderr);
    pyProcess.stdout.on('data', (data) => {
        data = data.toString()
        switch (data.slice(0, 3)) {
            case "END":
                res.send(download_url_slice + data.slice(3))
                break;
            case "CRF":
                req.io.emit("statusCode", "creating file...");
                // TODO: send "creating file"
                break;
            case "PTF":
                req.io.emit("statusCode", "proceeding to fetch tweets...");
                // TODO: send "proceeding to tweet fetch"
                break;
            case "FTW":
                const dataSplitted = data.split(":");
                req.io.emit("statusCode", `fetching tweet ${dataSplitted[1]}`);
                // TODO: send "Fetchning tweet N"
                break;
            case "PRO":
                req.io.emit("statusCode", "processing tweets...");
                // TODO: send "processing"
                break;
            case "ERR":
                req.io.emit("statusCode", "ERR");
                break;
            default:
                console.log("raise error");
            // TODO: do something
        }
    });
});

router.post('/zip', (req, res) => {
    const pyProcess = childProcess.spawn('python3', [path.join(__dirname + '/../twitterScript/main.py'), req.body.url.toString(), 'zip']);
    pyProcess.stderr.pipe(process.stderr);
    pyProcess.stdout.on('data', (data) => {
        data = data.toString()
        switch (data.slice(0, 3)) {
            case "END":
                res.send(download_url_slice + data.slice(3))
                break;
            case "CRF":
                req.io.emit("statusCode", "creating file...");
                // TODO: send "creating file"
                break;
            case "PTF":
                req.io.emit("statusCode", "proceeding to fetch tweets...");
                // TODO: send "proceeding to tweet fetch"
                break;
            case "FTW":
                const dataSplitted = data.split(":");
                req.io.emit("statusCode", `fetching tweet ${dataSplitted[1]}`);
                // TODO: send "Fetching tweet N"
                break;
            case "PRO":
                req.io.emit("statusCode", "processing tweets...");
                // TODO: send "processing"
                break;
            case "EXM":
                req.io.emit("statusCode", "extracting media...");
                // TODO: send "extracting media"
                break;
            case "ZIP":
                req.io.emit("statusCode", "zipping directory...");
                // TODO: send "zipping directory"
                break;
            case "EMN":
                req.io.emit("statusCode", `extracting media ${data.split(":")[1]}`);
                break;
            case "ERR":
                req.io.emit("statusCode", "ERR");
                break;
            default:
                console.log("raise error");
            // TODO: do something
        }
    });
});


module.exports = router;
