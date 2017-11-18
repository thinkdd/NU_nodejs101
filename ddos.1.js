const async = require('async')

// create a queue object with concurrency 2
var q = async.queue((task, callback) => {
    setTimeout(() => {
        console.log('hello ' + task.name + " time" + task.time);
        callback();        
    }, 3000);
}, 2);

// assign a callback
q.drain = () => {
    console.log('all items have been processed');
};

for(i=0; i < 10; i++){
    item.push({number:i})
}

// add some items to the queue
q.push({name: 'foo', time: 3000}, (err) => {
    console.log('finished processing foo');
});
q.push({name: 'bar', time: 1000}, (err) => {
    console.log('finished processing bar');
});

// add some items to the queue (batch-wise)
q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], (err) => {
    console.log('finished processing item');
});

// add some items to the front of the queue
q.unshift({name: 'bar'}, (err) => {
    console.log('finished processing bar');
});
