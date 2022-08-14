const Crypt = require('cryptr')
crypt = new Crypt('amara')
const encryption = crypt.encrypt('welcome to the training');
const decryption = crypt.decrypt(encryption);

console.log(encryption)
console.log(decryption)