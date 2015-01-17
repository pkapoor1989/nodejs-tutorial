var Person = require('./person');
var p = new Person("Piyush");
p.talk;
console.log('1');
process.nextTick(function() {
    console.log('2');
});

console.log('3');
console.log(require('fs').readdirSync('.'));
process.stdout.write('Hello World');
var fs = require('fs');
fs.stat('person.js',function(err,stat) {

});

process.stdout.write('Enter your choice');
process.stdin.resume();
    process.stdin.on('data',function(data) {
        process.stdout.write(data);
        process.stdin.pause();
    });

fs.watchFile('package.json',function() {
    console.log('file changed');
});