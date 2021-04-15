var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')

request('https://loja.panini.com.br/panini/solucoes/Busca.aspx?fcp=43438', function (err, res, body) {
  if (err)
    console.log('Error: ' + err);

  var $ = cheerio.load(body)

  $('.item').each(function () {
    var volume = $(this).find('.description h4 a').text().trim()
    var price = $(this).find('.price').text().trim()

    var data = (`${volume} está com um preço de ${price}. Alto pra caramba, não?`)
    fs.appendFile('panini.txt', data + '\n', (err) => {
      if (err) throw err;
      console.log(`The ${data} was appended to file`);
    });
  })
})