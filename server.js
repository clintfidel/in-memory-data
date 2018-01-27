import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('welcome to in-memoey-data');
  });

const port = process.env.PORT || 5300;

app.listen(port, () => {
  winston.info(`Connected on port ${port}`);
});