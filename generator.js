var list = require('country-list')();
var fs = require('fs');

let output = '';
for (let i of list.getCodes()) {
    output += '<div class="flag ' + i.toLowerCase() + '"> </div>\n';
}

fs.writeFile('output.txt', output);