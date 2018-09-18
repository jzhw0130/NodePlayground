var fs = require('fs');
var parse = require('xml-parser');
var inspect = require('util').inspect;
var _ = require('lodash');
var builder = require('xmlbuilder');

//Parse XML
const parseXML = function(filePath) {
   var languageXML = fs.readFileSync(filePath, 'utf8');
   var object = parse(languageXML);
   console.log(`object:${inspect(object, { colors: true, depth: Infinity })}`);

   var outputFilePath = './playground/Data/languages.txt';

   const languages = _.map(_.get(object, 'root.children'), item => {
      return {
         key: _.get(item, 'attributes.name'),
         value: _.get(item, 'content')
      };
   });

   return languages;
   //    const languageString = _.reduce(languages, (template, info) => `${template}\n${info}`);
   //    fs.writeFileSync(outputFilePath, languageString, 'utf8');
};

//Create XML
const createXML = function(dataArray) {
   var xml = builder.create('resources');
   _.each(dataArray, data => xml.ele('string', { name: `${data.key}` }, data.value));
   xml.end({ pretty: true });

   var outputFilePath = './playground/Data/languages.xml';
   fs.writeFileSync(outputFilePath, xml, 'utf8');
};

// parseXML('./playground/Data/strings.xml');
createXML(parseXML('./playground/Data/strings.xml'));
