const request=require('request');
const cheerio=require('cheerio');
const fs = require("fs");

const url="https://www.espncricinfo.com/series/south-africa-in-sri-lanka-2021-1271624/sri-lanka-vs-south-africa-2nd-odi-1271628/full-scorecard";
request(url,requestCallback);
function requestCallback(err, res ,html){
    fs.writeFileSync("temp.html",html);
    const $=cheerio.load(html); //$ is cheerio wrapper
    console.log($($(".playerofthematch-player-detail")).text());
}
