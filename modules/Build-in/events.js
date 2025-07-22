let Event = require("events");
let event = new Event();

// class MyEventEmitter extends Event {}

// let myEvent = new MyEventEmitter();

//! syntax ==>
//? emit("eventName", parameters)
//? on("eventName", cb(parameters){})

// on ==> with the help of on(), we define the functionality of the event
// emit ==> we can create our own event

// event.on("firstEvent", () => {
//   console.log("event called");
// });

// event.on("firstEvent", () => {
//   console.log("event called twice");
// });

// event.on("secondEvent", () => {
//   console.log("second event called");
// });

// event.emit("firstEvent");
// event.emit("secondEvent");

event.on("new", (param1, param2) => {
  console.log("event 1 called");
  console.log(`a new user has been joined ${param1} with id:${param2}`);
});
event.on("new", () => {
  console.log("event 2 called");
});

// event.emit("new", "abc", "123");
event.emit("new");
