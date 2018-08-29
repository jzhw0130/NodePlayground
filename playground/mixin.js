var mixin = {
   grade: 6,
   calculateAverage: function() {
      return (this.math + this.history) / 2;
   }
};

class Transcript {
   constructor() {
      this.name = arguments[0];
      this.math = arguments[1];
      this.history = arguments[2];
      Object.assign(this, mixin);
   }

   toString() {
      return `Hi ${this.name}, your math score is ${this.math}, history is ${this.history}`;
   }
}

const myScrtipt = new Transcript('jing', 70, 80);
console.log(myScrtipt.toString());

// Object.assign(Transcript.prototype, mixin);
// Object.assign(myScrtipt, mixin);

console.log(
   `Hi ${myScrtipt.name}, grade is ${
      myScrtipt.grade
   }, your average score is ${myScrtipt.calculateAverage()}`
);
