function Blockchain () {
    this.chain = [];
    this.newTransctions=[];
}
Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash){
    const newBlock = {
    index:
    this.chain.length + 1,
    timestamp:
    Date.now(),
    transaction:
    this.newTransaction,
    nonce,
    hash,
    previousBlockHash,
   } ;   
   this.newTransaction = [];
   this.chain.push(newBlock);
   return newBlock;
}
module.exports = Blockchain;