const {readFile,writeFile} = require("fs");

readFile("./Content/first.txt",`utf8`,(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result

    readFile("./Content/second.txt",`utf8`,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile(`./Content/resultasync.txt`,`Here is the  ${first}, ${second}`
        ,{flag:"a"},(err,res)=>{
            if(err){
                console.log(err);
            }
            console.log(res);
        })
    })
})