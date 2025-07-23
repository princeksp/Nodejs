//! <==> http <==>
//? it stands for hyper text transfer protocol, which means that some set of rules have to followed while sending and receiving data/resource from server.
//& rules means some set of methods that are used to send and receive data from the server.
//? get ==> it is used to fetch data/resource from the server.
//? post ==> it is used to send data/resource to the server.
//? put/patch ==> it is used to update the resource.
//? delete ==> it is used to delete the resource.
//TODO: stateless and RESTful API

//~ http is a built in module in NodeJS, using which we can create our own web server

//! steps to create a server using nodeJS
//? 1) import the built-in http module
//? 2) use createServer() to create a server and store the instance of the server in a variable, this callback accepts two parameters req and res.
//? 3) assign a port number to the server, through which we can send responses and accept requests using listen()

const http = require("http");
// console.log(http);

let server = http.createServer((req, res) => {
  //~ if you want to display anything on the UI (user interface)
  res.write("message from write()!!!!!!");
  //~ this will terminate the current req-res cycle
  res.end();

  //   res.write("hiii"); // this will give error;
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9000");
});

//! how to tap into server
// open browser and type "localhost:PORT_NUMBER"
//! to exit or to close the server
// press ctrl + c on terminal
//! after each modification, restart the server
