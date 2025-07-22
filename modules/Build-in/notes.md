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

# Path Method

5 Goabal variables:-- which can be used without importing

1. \_\_dirname
2. \_\_filename
3. modules
4. exports
5. require()
