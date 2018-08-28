class Tools {
   constructor(props) {
      console.log(`Props: ${props}`);
      console.log(`Arguments: ${JSON.stringify(arguments)}`);
      this.key = arguments[1];
   }
}

Tools.prototype.getPrivateKey = function() {
   return this.key;
};

Tools.getKey = function() {
   return this.key;
};

const tool1 = new Tools('001', 'One');
const tool2 = new Tools('002', 'Two');

console.log(`tool1: ${tool1.key}`);
console.log(`tool1 private key: ${tool1.getPrivateKey()}`);
console.log(`tool2: ${tool2.key}`);

console.log(`Get key: ${Tools.getKey()}`);
