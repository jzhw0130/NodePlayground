import axios from 'axios';
// const axios = require('axios');

const HOST = 'api.dev.ihealth-care.com/v1';

axios.get(`http://${HOST}/common/countries`).then(respone => {
    console.log('1', respone.status)
    console.log('2', respone.data);
}).catch(e => {
    console.log('e', e);
})







