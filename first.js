const fs = require('fs');

if(process.argv !== 4){
    console.error('can not read direcotry');
    process.exit;
}

const soucePath = process.argv[2];
const destPath = process.argv[3];
const regex = /.[pdf]/g;
fs.readdir(soucePath, (err,files)=>{
    if(err){
        console.error("Could not open file ")
        process.exit
    }
    files.filter( ()=>{
        for (const file in files) {
            // if (Object.hasOwnProperty.call(object, file)) {
            //     const element = object[file];
                
            // }
            files[file] = file.match(regex)
        }
    })
    console.log(files)
}
)