const request=require('request');
const cheerio=require('cheerio');

const url='https://www.espncricinfo.com/series/south-africa-in-sri-lanka-2021-1271624/sri-lanka-vs-south-africa-2nd-odi-1271628/full-scorecard';

request(url,cb);
function cb (error, response, html) {
    if(error){
    console.error('error:', error); // Print the error if one occurred
    }
    else {
        extractHTML(html);
    }
};
// #main-container > div:nth-child(1) > div > div > div.match-body > div:nth-child(2) > div.card.content-block.rounded-0 > div > div.playerofthematch-content > div.playerofthematch-player-detail
{/* <span class="playerofthematch-name">Faf du Plessis</span> */}
{/* <span class="playerofthematch-name">Faf du Plessis</span> */}
function extractHTML(html){
    let selectorTool=cheerio.load(html);
    let statsArr=selectorTool('.match-body .table.bowler  .cursor-pointer.bowler-wicket');
    let lbc=selectorTool(statsArr[0]);
    console.log(lbc.text());
}
