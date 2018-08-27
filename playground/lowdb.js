const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ posts: [], user: [] }).write();

db.get('posts')
   .push({ id: 2, title: 'lowdb is bad' })
   .write();

db.get('posts')
   .remove({ id: 2 })
   .write();

// console.log(
//    db
//       .get('posts')
//       .find({ id: 2 })
//       .value()
// );

// db.set('key', 'ii02-1').write();

// console.log(db.get('key').value());

// console.log(db.getState());

// db.setState({ key: '007' });

console.log(db.getState());
