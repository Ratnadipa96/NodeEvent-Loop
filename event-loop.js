const { clear } = require('console');
const fs = require('fs');
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(()=> console.log("Timer one finished"),0);
setImmediate(()=> console.log("Set Immediate finished"))

fs.readFile("test-file.txt",()=>{
    console.log("I/O file finished");
    setTimeout(()=> console.log("Timer one 2finished"),0);
    setTimeout(()=> console.log("Timer one 3 finished"),3000);
setImmediate(()=> console.log("Set Immediate 2 finished"));

process.nextTick(()=> console.log("process that next tieck 1"));

crypto.pbkdf2Sync('password','salt',100000,1024,'sha512',()=>{
    console.log(Date.now()-start,"password encrypted");
});
crypto.pbkdf2Sync('password','salt',100000,1024,'sha512',()=>{
    console.log(Date.now()-start,"password encrypted");
});
crypto.pbkdf2Sync('password','salt',100000,1024,'sha512',()=>{
    console.log(Date.now()-start,"password encrypted");
});
crypto.pbkdf2Sync('password','salt',100000,1024,'sha512',()=>{
    console.log(Date.now()-start,"password encrypted");
});
})

console.log("hello from the top level code");