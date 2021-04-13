/* jslint node: true */
/* jshint browser: true */
"use strict";

const category = 'toys';

console.log(`https://someurl.com/${category}/5/jopa`);

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr);

console.log(5%24);

console.log(2*4 === '8');

const isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);
