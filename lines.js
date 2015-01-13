var split = require('split');
var through = require('through');

var count = 0;

process.stdin
	.pipe(split())
	.pipe(through(function (buf) {
		var line = buf.toString();
		var isEven = count++ % 2 == 0;
		console.log(isEven ?  line.toLowerCase() : line.toUpperCase());
})).pipe(process.stdout);