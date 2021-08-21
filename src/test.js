const Blockchain = require('./blockchain');
const bitcoin = new Blockchain (); 
bitcoin.createNewBlock (2389,'ABCD','78s97d4x');
console.log(bitcoin);
