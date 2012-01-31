	var net = require('net');
var sys = require('sys');

var settings = {
	net:{
		port:8888
	}
}

var users = 0;


function incomingData(data)
{
	//convert the input from JSON

	try
	{
		var input = JSON.parse(data.trim());
		console.dir(input);
	}
	catch(e)
	{
		console.log(e);
		this.write("badly formatter input. I want JSON!");
		//stubbing the input
		return false;
	}
	// and we have input!

	// The JSON i expect will have a simple format : {action:"actionverb",[arguments]} .
	// I shy away from calling this an RPC system, as the action is not going to map directly to a method that will be executed.
	switch(input['action'])
	{
		case "thrust":
			this.write("vroom vroom!");
			break;

		case "message":
			this.write("Ground Control To Major Tom!");
			break;

		default:
			this.write("unknown command");
			break;
	}

}


function newConnection (socket)
{
  socket.setEncoding("utf8");

        users++;



  socket.write("Echo server 1.0 yay me :D \r\n");

  socket.on("data",incomingData);

  socket.on("end", function () {

    socket.end();
        users--;
  });


}

net.createServer(newConnection).listen(settings.net.port);

