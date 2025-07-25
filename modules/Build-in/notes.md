//user-defined modules ==> modules which are defined by user

// in order to export a module , we have two ways:=

i. module.exports = variablename;(using this we can only export one variable ata a time )
ii. modules.exports = {variableName1, variableName2.....}

for importing we have 2 ways

syntax is => let varName = require("path of file")

1. let varName = require("path)
2. let[varName1, varName2] = require("path")

//! built-in modules ==> these modules are bundled with nodeJS installation, also called as core modules.
// examples ==> fs, http, path, os, crypto, etc..

//? syntax for importing built-in modules ==>
// let variableName = require("module-name")

whole nodejs contain :-

1. v8 engine
2. c++
3. dependencies :
   i. LIBUV :-written in c , used for asynchronous I/O operation
   II. Zlib
   iii.Js

   Node-JS :--

   1. main thread ----------------2. Thread POOL(by default we have 4 thread)
      v8. engine---------------------LIBUV(written in c , used for asynchronous I/O operation )

async await

:-event return class
let Event = require('events')
2 method , 1. on(handle a event that are created ) , 2. emit (creating a event);
. on method are written before emit because it continues listen the event

. jitne baar event ko on method se listen kareinge utne baar o listne hoga cahe parameter pass kre ya na kre
eg:- ek event h "new" agr o 2 baar "on" methode se listen ho raha h to dono baar listne hoga .

<!-- # Buffer and Streams -->

buffer<d8u30o20i0>
.it is simplier to array
. it is fixed size(size decide by NodeJS)
. it store binary data
. once the operation is done it will be destroyed.(NodeJS decide it )

-->> data are divided in chunks and store in buffer of RAM and after that from RAM it goes to Destination .

# Streaming :-- sending a chunks of data from src to destination

# character set mapping

123 --> unicode charset--->binary(charcter encoding)

chunks size() :---by default highwatermark size is 64kb (only u can send 64kb of data ) we can change it also .

======================================================Assesment-1===========================================================

1. What is NodeJs and what Js runtime does it use ?

- ans:-- NodeJs is a run time environment of javascript outside browser in server where we can write Js code easily . it uses v8 engine to execute the js code .

2. what is difference between user-defined modules and buid-in modules in NodeJs? Give example of each.
   ans:--- user-defined modules are the modules which are defined by the user where as buid-In modules are which are already present in NodeJs such as fs,os,path etc.
3. write a simple script using the fs modules synchronous method readFileSync to read a file and log its contents.
   ans:-- let res = fs.readFileSync("path",encoding)
   clg(res)
4. what is the role of the event loop in nodeJs?
   ans:- event loop are used to execute the event which are present in event queue.

5. How does the callback queue intract with the event loop in asynchronous operation?
   ans:-- Callback queue stores callbacks from async operations and event Loop constantly checks if the call stack is clear if clear, it pushes the first callback in the queue to the stack for execution.

6. create a function that uses fs.readfileSync to read the two file sequentially , concatenate their content and write the result to a new file using fs.writeFileSync.
   ans :-- function concatenateFiles(file1, file2, outputFile) {
   const content1 = fs.readFileSync(file1, 'utf-8');
   const content2 = fs.readFileSync(file2, 'utf-8');
   const combined = content1 + content2;
   fs.writeFileSync(pathofnew file , combined);

7. What is fifference between require()(commonJS) and import (ESM) for including modules in Nodejs.
   require() is used in CommonJS, synchronous and widely supported in older Node.js.import is used in ESM, supports modern features like await.
8. how would you handle errors in Synchronous fs operation (eg. readfileSync) without crashing the Nodejs Process?
   const fs = require('fs');
   try {
   const data = fs.readFileSync('file.txt', 'utf-8');
   console.log('content:', data);
   } catch (err) {
   console.error('Error reading file:', err.message);
   }
9. Create a nodejs Script that uses the buidIn fs module to:
   //hardcode values
   const a=10, b= 5;
   --> perform arithimatic operation
