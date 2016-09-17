const request = require("request");
const cheerio = require("cheerio");

var np = 4;

for(var i = 0; i < np; i++) {
    var url = "http://www.publicsurplus.com/sms/all,fl/browse/cataucs?slth=&catid=1&page=" + i + "&sortBy=timeLeft";
    request(url, function(err, response, html) {
        var $ = cheerio.load(html);
        $('table.tabCurr').children('tr').each(function(i, e) {
            var tds = $(this).children('td');
            var auctionId = $(tds[0]).text().trim();
            if (auctionId != '') {
                var title = $(tds[1]).text().trim();
                var state = $(tds[3]).text().trim();
                var timeleft = $(tds[4]).text().trim();
                var bids = $(tds[5]).text().trim();
                var price = $(tds[6]).text().trim();
                console.log(auctionId + ';"' + title + '";"' + state + '";"' + timeleft + '";"' + bids + '";"' + price + '"');
            }
        });
    });
}