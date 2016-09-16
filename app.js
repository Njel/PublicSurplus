const request = require("request");
const cheerio = require("cheerio");

for(var i = 0; i < 10; i++) {
    var url = "http://www.publicsurplus.com/sms/list/past?page=" + i + "&sortBy=end&sortDesc=N&orgid=1239&sorg=&show=past&posting=pageNumber&masscopy_process=&keyWord=&startDate=Sep+1%2C+2015&endDate=Sep+15%2C+2016&catId=";
    request(url, function(err, response, html) {
        var $ = cheerio.load(html);
        console.log('AuctionID;Title;Price;Date;Time');
        $('table.tabRed').children('tr').each(function(i, e) {
            var tds = $(this).children('td');
            var auctionId = $(tds[0]).text().trim();
            if (auctionId != '') {
                var title = $(tds[1]).text().trim();
                var price = $(tds[3]).text().trim();
                var end = $(tds[6]).text().trim().split(' ');
                var dateEnd = end[0] + ' ' + end[1] + ' ' + end [2];
                var timeEnd = end[3] + ' ' + end[4];
                console.log(auctionId + ';"' + title + '";"' + price + '";"' + dateEnd + '";"' + timeEnd + '"');
            }
        });
    });
}