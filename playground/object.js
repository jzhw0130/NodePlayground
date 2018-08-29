/************ Object.defineProperty **********/
const user = {
   name: 'jing',
   gender: 'male',
   printDescription: function() {
      console.log(`Hi, ${this.name} is ${this.gender}`);
   }
};

console.log('original data', user);
console.log(1, user.hasOwnProperty('phone'));

Object.defineProperty(user, 'phone', {
   value: '888888',
   writable: true,
   enumerable: true
});
console.log('new data', user);
console.log(2, user.hasOwnProperty('phone'));

user.phone = '6666';
console.log('new data', user);

/************ Object.assign **********/
const newUser = Object.assign({ id: 2 }, user, { married: true });
console.log('new user', newUser);

/************ Object.create **********/
const anotherUser = Object.create(newUser);
newUser.printDescription();
anotherUser.id = 3;
console.log('another user', anotherUser.id, anotherUser.married);

/************ Object.defineProperties **********/
const fourthUser = Object.defineProperties(anotherUser, {
   firstName: {
      value: 'jing',
      writable: false
   },
   lastName: {
      value: 'zhi',
      writable: true
   }
});

console.log('fourth user', fourthUser);

/************ Object.entries **********/
const entries = Object.entries({ foo: 'bar', baz: 42 });
console.log('entries', entries[0], entries[1]);

/************ Object.entries **********/
const constUser = Object.freeze(user);
console.log('const user', constUser);
//Invalid
constUser.phone = '000';
console.log('const user', constUser);

/************ Object.getOwnPropertyNames **********/
const descriptors = Object.getOwnPropertyNames(constUser);
descriptors.map(descriptor => {
   console.log('descriptor', [descriptor], typeof constUser[descriptor]);
   const sDescriptor = Object.getOwnPropertyDescriptor(constUser, descriptor);
   console.log('sDescriptor', sDescriptor);
});

/************ Object.getOwnPropertyNames **********/
const descriptors1 = Object.getOwnPropertyDescriptors(constUser);
console.log('descriptors1', descriptors1.name);

/************ Object.getPrototypeOf **********/
console.log('getPrototypeOf', Object.getPrototypeOf(anotherUser) === newUser);

/************ Object.is **********/
var test = { a: 1 };
console.log('is', Object.is(test, test));

/************ Object.isExtensible **********/
const object1 = {};
console.log('isExtensible', Object.isExtensible(object1));
Object.preventExtensions(object1);
console.log('isExtensible', Object.isExtensible(object1));

/************ Object.isFrozen **********/
const object2 = {
   property1: 42
};
console.log('isFrozen', Object.isFrozen(object2));
Object.freeze(object2);
console.log('isFrozen', Object.isFrozen(object2));

/************ Object.keys **********/
console.log('keys', Object.keys(user));
