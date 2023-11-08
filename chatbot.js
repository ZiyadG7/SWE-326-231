const process = require('process')


console.log("Your question: ")
process.stdin.on('data',(data)=>{
    if(data == 'quit' | data == 'exit'){
        process.stdout("Thank you!")
        process.exit
    }
    process.stdout('Answer')
})
