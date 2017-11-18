const async = require('async')
//const request = require('request')
const fs = require('fs')

const items= []

// create a queue object with concurrency 2
var q = async.queue((task, callback) => {
   fs.writeFile('file/mn' + task.number + '.txt','This si from process:'+ task.number,(err) => {
       if(err) throw err
       console.log('file save' + task.number);       
       callback()
   })
}, 1)  

// assign a callback
q.drain = () => {
    console.log('all items have been processed')
}

for(i=0; i < 100; i++){
    items.push({number:i})
}

// add some items to the queue
q.push(items, (err) => {
    console.log('finished processing foo')
})