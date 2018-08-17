import express from 'express';
import env from './env';
import bodyParser from 'body-parser';

var app = express();
app.use(bodyParser.json());

app.get('/:name', (req, res) => {
   console.log('req', req.params, req.path);
   res.status(200).send({
      Tip: `Hello, your name is ${req.params.name}`
   });
});

app.get('/id/search', (req, res) => {
   console.log('req', req.query);
   res.status(200).send({
      Tip: `Hello node, your key is ${req.query.key}`
   });
});

app.post('/', (req, res) => {
   console.log('req', req.body);
   res.status(200).send({
      code: 1,
      value: {
         authen: `xxx-${req.body.key}`
      }
   });
});

app.listen(process.env.port, () => {
   console.log(`Server start at port ${process.env.port}`);
});
