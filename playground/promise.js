const axios = require('axios');

const HOST = 'api.dev.ihealth-care.com/v1';

axios
   .get(`http://${HOST}/common/countries`)
   .then(response => {
      console.log('1', response.status);
      return response.status;
   })
   .then(status => console.log(`Response status ${status}`))
   .catch(e => {
      console.log('e', e);
   });

const fetchRaces = async () => {
   return await axios.get(`http://${HOST}/common/races`);
};

fetchRaces()
   .then(response => console.log('response', response.data))
   .catch(e => console.log('e', e));
