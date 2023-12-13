var http = require("http");
var url = require("url");

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "Text/html" });
    res.write("Hello NODE!"); //write a response to the client

    var q = url.parse(req.url, true).query;
    res.write(q.year + " " + q.month);
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
