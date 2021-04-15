var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

request("https://br.op.gg/summoner/userName=tozeos", function (err, res, body) {
  if (err) console.log("Erro: " + err);

  var $ = cheerio.load(body);

  $(".GameItemList").each(function () {
    var jogo = $(this).find(".GameType").text().trim();
    var resultado = $(this).find(".GameResult").text().trim();
    var hora = $(this).find(".TimeStamp span").text().trim();

    console.log(`haha${jogo}, ${resultado}, ${hora} `);
    fs.appendFile("latestgames.txt", jogo + "\n");
  });
});
