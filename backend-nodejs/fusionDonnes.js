const fs = require("fs");
var jsonMerger = require("json-merger");
var result = jsonMerger.mergeFiles(["./json/ebenafrica.json", "./json/ebenafrica-logos.json", "./json/ebenafrica-urls.json"]);
let data = JSON.stringify(result, null , 2)
fs.writeFileSync("./json/fusion.json", data)
fs.writeFileSync('../configMongoDB/dataset/fusion.json', data)