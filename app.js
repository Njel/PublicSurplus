const request = require("request");
const cheerio = require("cheerio");

var np = 174;

for(var i = 0; i < np; i++) {
    var url = "http://www.publicsurplus.com/sms/list/past?page=" + i + "&sortBy=end&sortDesc=N&orgid=1239&sorg=&show=past&posting=pageNumber&masscopy_process=&keyWord=&startDate=Sep+1%2C+2015&endDate=Sep+15%2C+2016&catId=";
    request(url, function(err, response, html) {
        var $ = cheerio.load(html);
        $('table.tabRed').children('tr').each(function(i, e) {
            var tds = $(this).children('td');
            var auctionId = $(tds[0]).text().trim();
            if (auctionId != '') {
                var title = $(tds[1]).text().trim();
                var price = $(tds[3]).text().trim();
                var end = $(tds[6]).text().trim();
                console.log(auctionId + ';"' + title + '";"' + price + '";"' + end + '"');
            }
        });
    });
}