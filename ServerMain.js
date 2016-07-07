//Require/Import http module
var http=require('http');

//Dispatcher
var dispatcher=require('httpdispatcher');

//Define port
const PORT=8080;

//Function to handle requests and send response
function handleRequest(request, response){

	response.end('RCServer now running.');
	
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}



dispatcher.setStatic('resources');

//A sample GET request    
dispatcher.onGet("/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});    




//Create the server
var server=http.createServer(handleRequest);

//Start server
server.listen(PORT, '192.168.0.102');
