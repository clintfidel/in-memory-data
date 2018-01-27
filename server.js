import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';
import BlogRouter from './server/routes/blogRouter';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/v1/blog', BlogRouter);

app.get('/', (req, res) => {
  res.send('testing out Mock-data');
});

const port = process.env.PORT || 5300;

app.listen(port, () => {
  winston.info(`Connected on port ${port}`);
});
