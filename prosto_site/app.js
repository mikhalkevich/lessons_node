http = require('http');
fs = require('fs');
var server = http.createServer(function(req, res){
 getData(res);
}).listen(8082);
// getData функция извлекает данные и запускает функцию getTemp
function getData(res){
    fs.readFile('data.json', function(err,data){
        if(err){
            console.log(err);
        }else{
            //data.toString('utf-8')
            getTemp(JSON.parse(data.toString()), res);
        }
    })
}
// извлекает шаблон и вызывает другую функцию в которую передаёт и шаблон и данные
function getTemp(titles, res){
    fs.readFile('temp.html', function(err, data){
        if(err){
            console.log(err);
        }else{
            formatHtml(titles, data.toString(), res);
        }
    });
}
// функция формата и вывода, конечная
function formatHtml(titles, tmp, res){
    htmldata = tmp.replace('$$', titles.titles);
    res.writeHead(200, {'content-type':'text/html'});
    res.end(htmldata);
}