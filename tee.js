'use strict';
var fs = require('fs');
var filename = process.argv[2];

process.stdin.setEncoding('utf8');
// pipe stdin to stdout
process.stdin.pipe(process.stdout);

//if a file output is specified in command line
//then also pipe stdin to a file
//{'flags': 'a'} allows the file to be appended.
if (filename)
{
  process.stdin.pipe(fs.createWriteStream(filename, {'flags': 'a'}));
}
