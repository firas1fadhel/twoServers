var http = require ("http");
var  PORT =7000;
var PORT2 = 7500;
function handleRequest(request, response){
    response.end("It Works!! Path Hit:You are great " + request.url);
}
function handleRequest2(request, response){
    response.end("It Works!! Path Hit:You are stupid  " + request.url);
}
var server = http.createServer(handleRequest);
server.listen(PORT, function() {
    
   
      console.log("Server listening on: http://localhost:%s", PORT);
    
    });
    

var server= http.createServer(handleRequest2);
server.listen(PORT2,function(){
    console.log("Server listening on: http://localhost:%s", PORT2);
})