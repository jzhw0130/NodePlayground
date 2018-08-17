import axios from 'axios';

const HOST = 'api.dev.ihealth-care.com/v1';

axios
   .get(`http://${HOST}/common/countries`)
   .then(respone => {
      console.log('1', respone.status);
      console.log('2', respone.data);
   })
   .catch(e => {
      console.log('e', e);
   });

const fetchRaces = async () => {
   return await axios.get(`http://${HOST}/common/races`);
};

fetchRaces()
   .then(response => console.log('response', response.data))
   .catch(e => console.log('e', e));
