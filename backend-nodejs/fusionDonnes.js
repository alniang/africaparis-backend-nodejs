const fs = require("fs");
var jsonMerger = require("json-merger");

var resultEbenafrica = jsonMerger.mergeFiles([
  "./json/ebenafrica.json",
  "./json/ebenafrica-logos.json",
  "./json/ebenafrica-urls.json",
]);
var resultAfrikrea = jsonMerger.mergeFiles([
  "./json/afrikrea/afrikrea-urls.json",
  "./json/afrikrea/afrikrea-logos.json",
  "./json/afrikrea/afrikrea-titres.json",
  "./json/afrikrea/afrikrea-prix.json",
]);

let dataEbenafrica = JSON.stringify(resultEbenafrica, null, 2);
fs.writeFileSync("./json/fusionEbenafrica.json", dataEbenafrica);
fs.writeFileSync("../configMongoDB/dataset/fusionEbenafrica.json", dataEbenafrica);

let dataAfrikrea = JSON.stringify(resultAfrikrea, null, 2);
fs.writeFileSync("./json/afrikrea/fusionAfrikrea.json", dataAfrikrea);
fs.writeFileSync("../configMongoDB/dataset/fusionAfrikrea.json", dataAfrikrea);
