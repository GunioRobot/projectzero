var net = require('net');
var sys = require('sys');

var settings = {
	net:{
		port:8888
	}
}

var users = 0;


function bye()
{
} 

function incomingData(data)
{
	if ()
	{
		this.end()	
	}

	this.write("YAY new data. thx. u are nr "+users+"\r\n");
	sys.puts(" - "+data+"\r\n");
}


net.createServer(function (socket) {

  socket.setEncoding("utf8");

	users++;

  socket.write("Echo server 1.0 yay me :D \r\n");

  socket.on("data",incomingData);

  socket.on("end", function () {

    socket.end();
	users--;
  });

}).listen(settings.net.port);

