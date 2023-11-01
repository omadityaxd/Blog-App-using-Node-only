const fs = require("fs");

//reading a file

// fs.readFile('./docs/blogs.txt' ,(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// writing a file

fs.writeFile("./docs/blogs.txt", "Hello World", () => {
  console.log("file was written");
});

fs.writeFile("./docs/blogs2.txt", "Hello World", () => {
  console.log("file was written");
});

//directories

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if(err){
        console.log(err)
    }
    console.log('folder was created')
  });
}

//deleting folder

else{
    fs.rmdir('./assets' ,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}

//deleting files

if(fs.existsSync('./docs/deleteme.txt'))
{
    fs.unlink('./docs/deleteme.txt' , (err)=>{
        if(err){
            console.log(err)
        }
        console.log('file was deleted')
    })
}
