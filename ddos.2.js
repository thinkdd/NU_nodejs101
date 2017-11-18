const async = require('async')
const request = require('request')

const items= []

// create a queue object with concurrency 2
var q = async.queue((task, callback) => {
    request('http://',(error, response, body)=>{
        console.log('foo')
    })

    console.log('taks ' + task.number)
    callback()
    /*
    setTimeout(() => {
        console.log('taks ' + task.number)
        callback()
    }, 3000)
    */
}, 1)

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