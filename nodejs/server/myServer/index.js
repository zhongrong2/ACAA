const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer(function (req,res) {
    var url=req.url;
    if(url=="/favicon.ico"){
      res.end();
    }else{
       var ext=path.extname(req.url).slice(1);
       res.setHeader("content-type",contentType[ext]);
       var fullpath=path.join(__dirname,req.url);
       fs.readFile(fullpath,"utf-8",function(error,val){
           res.write(val);
           res.end();
       })
    }
});
const contentType = {
    "html" : "text/html",
    "css"  : "text/css",
    "js"   : "text/javascript",
    "json" : "application/json",
    "ico"  : "image/x-icon",
    "gif"  : "image/gif",
    "jpeg" : "image/jpeg",
    "jpg"  : "image/jpeg",
    "png"  : "image/png",
    "pdf"  : "application/pdf",
    "svg"  : "image/svg+xml",
    "swf"  : "application/x-shockwave-flash",
    "tiff" : "image/tiff",
    "txt"  : "text/plain",
    "wav"  : "audio/x-wav",
    "wma"  : "audio/x-ms-wma",
    "wmv"  : "video/x-ms-wmv",
    "xml"  : "text/xml"
}
server.listen(8088);