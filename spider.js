var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')

request('https://myanimelist.net/topanime.php?type=bypopularity', function (err, res, body) {
  if (err)
    console.log('Error: ' + err);

  var $ = cheerio.load(body)

  $('.ranking-list').each(function () {
    var title = $(this).find('.clearfix h3 a').text().trim()
    var rating = $(this).find('.score span').text().trim()

    console.log(`haha ${title} nota ${rating}`)
    fs.appendFile('panini.txt', 'data to append', (err) => {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  })
})