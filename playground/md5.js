const md5 = require('md5');

const originaliOS = `${'com.ihealth.milo'}@{'1'}@{'Mr. Liu is Awesome!'}`;
const originalAndroid = `${'com.ihealthcare.milo'}@{'1'}@{'Mr. Liu is Awesome!'}`;

console.log('ios', md5(originaliOS));
console.log('android', md5(originalAndroid));
