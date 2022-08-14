const Crypt = require('cryptr')
crypt = new Crypt('amara')
const encstring = crypt.encrypt('welcome to the training');
const decrypt = crypt.decrypt(encstring);

console.log(encstring)
console.log(decrypt)