import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';
import userRouter from './server/routes/userRouter';
import blogRouter from './server/routes/blogRouter'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('welcome to in-memoey-data');
  });

app.use('api/v2/users', userRouter);
app.use('api/v2/blog', blogRouter)

const port = process.env.PORT || 5300;

app.listen(port, () => {
  winston.info(`Connected on port ${port}`);
});