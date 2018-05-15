const fs = require('fs');
const path = require('path');
const process = require('process');
//要操作的文件的地址
const readFilePath = path.join(__dirname,"origin.txt");
const writeFilePath = path.join(__dirname,"target.txt");

//同步方式读取内容数据
try{
    var con = fs.readFileSync(readFilePath,'utf-8').toString().toUpperCase();
    console.log(con);
}catch(error){
    console.log(error);
}
// 异步方式写入数据
fs.writeFile(writeFilePath,con,function(error){
    if(error){
        return console.log(err);
    }else{
        console.log("The content has been writeen");
    }
})
//捕获整个进程运行时的异常
process.on('uncaughtException', (exception)=> {
    console.log(exception.message);
});