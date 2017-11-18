const async = require('async')
const request = require('request')

const items= []

// create a queue object with concurrency 2
var q = async.queue((task, callback) => {
    request('http://www.acad.nu.ac.th',(error, response, body)=>{
        if(error){
            console.log('foo')            
            callback() 
        }
        console.log('foo',task.number)
        console.log('foo',response && response.statusCode)
        callback() 
    })
}, 1)  // ddod 1000

// assign a callback
q.drain = () => {
    console.log('all items have been processed')
}

for(i=0; i < 10; i++){
    items.push({number:i})
}

// add some items to the queue
q.push(items, (err) => {
    console.log('finished processing foo')
})