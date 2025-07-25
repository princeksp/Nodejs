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
const path = require("path");
const fs = require("fs");
// console.log(http);

/* let server = http.createServer((req, res) => {
  //~ if you want to display anything on the UI (user interface)
  // res.write("message from write()!!!!!!");
  //~ this will terminate the current req-res cycle
  // res.end();
  // res.end("this is from end()");
  // console.log("hi");
  // console.log(req); // req.body, req.status(), req.headers(), etc...
  // console.log(res);
  // res.end();
  //   res.write("hiii"); // this will give error;
  // console.log("url:" + req.url);
  // console.log("method:", req.method);
  // console.log(res.getHeader());
  // res.end();
});

server.listen(9000); */

//! how to tap into server
// open browser and type "localhost:PORT_NUMBER"
//! to exit or to close the server
// press ctrl + c on terminal
//! after each modification, restart the server

//? node --watch filename

//? "/about", "/download", "/blogs" ==> endpoints
// https://nodejs.org/en/

//? routing ==> handling user's multiple requests

let server = http.createServer((req, res) => {
  //! before sending res, we have to set the headers also, so that browser can use this information to render data
  //! to set headers, use
  //? writeHead(statusCode, "statusMessage", {"content-type":"value"})
  //~ ============================= sending html response ==============================
  // res.writeHead(200, { "Content-Type": "text/html" });
  // let filePath = path.join(__dirname, "..", "..", "..", "Public", "Pages", "index.html");
  // let readContents = fs.readFileSync(filePath, "utf-8");
  // res.end(readContents);
  //~ ============================= sending json response ==============================
  res.writeHead(200, { "Content-Type": "application/json" });
  let filePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "Public",
    "Pages",
    "data.json"
  );
  res.end(fs.readFileSync(filePath, "utf-8"));
});

//? writeHead(statusCode, "statusMessage", {"Content-Type":"value"})
// statusCode ==> in total 5 series
//1) 1XX ==> informational
//2) 2XX ==> success
//3) 3XX ==> redirection
//4) 4XX ==> client side error
//5) 5XX ==> server side error

//! if you want to send html response ==> value: "text/html"
//! if you want to send css response ==> value: "text/css"
//! if you want to send javascript response ==> value: "application/js"
//! if you want to send json data ==> value: "application/json"

server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 90000");
});
