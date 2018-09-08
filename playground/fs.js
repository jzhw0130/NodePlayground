const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;
const readChunk = require('read-chunk');

const workpath = './playground/Data/';
const sourceFileName = 'ECG.txt';
const convertFileName = 'ECG-Convert.txt';

const fileExists = promisify(fs.exists);
const fileStat = promisify(fs.stat);
const fileWrite = promisify(fs.writeFile);
const fileAppend = promisify(fs.appendFile);

function chunkFileInput(filepath, chunkSize) {
   const results = [];
   let pos = 0;
   let buf = readChunk.sync(filepath, pos, chunkSize);
   while (buf.length > 0) {
      results.push([...buf]);
      pos += buf.length;
      buf = readChunk.sync(filepath, pos, chunkSize);
   }

   return results;
}

function write(data, append, path) {
   fileWrite(path, data, { encoding: 'utf8' })
      .then(status => fileAppend(path, append, { encoding: 'utf8' }))
      .then(status => console.log('append', status))
      .catch(error => {
         console.log('write error', error);
      });
}

const convertData = filter => {
   const convertDataPath = path.join(workpath, convertFileName);
   if (fs.existsSync(convertDataPath)) fs.unlinkSync(convertDataPath);
   const writeStream = fs.createWriteStream(convertDataPath);

   const sourceDataPath = path.join(workpath, sourceFileName);
   if (!fs.existsSync(sourceDataPath)) return;
   const readStream = fs.createReadStream(sourceDataPath);

   readStream.on('readable', () => {
      let chunk;
      while (null !== (chunk = readStream.read())) {
         writeChunk(writeStream, chunk, filter);
      }
   });
};

const writeChunk = (writeStream, data, filter) => {
   console.log('writing', data.length);
   for (let i = 0; i < data.length / 2; i++) {
      let value = data[2 * i] * 256 + data[2 * i + 1];
      value = value > 32767 ? value - 65536 : value;
      if (filter.indexOf(value) < 0) {
         writeStream.write(`${value}\n`);
      }
   }
};

const filter = Array.from(Array(10000).keys()).map(key => key + 1 + 22767);
convertData([32767]);
