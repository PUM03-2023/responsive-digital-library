import bodyParser from 'body-parser';
import express from 'express';
import router from '././routes';
import bookRouter from './routes/book.routes';
import './config/mongodb.config';

const app = express();
const PORT = 8080;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/api', router);
app.use('/api/books', bookRouter);

app.get('/', function(req, res){
  res.send('Server: Hello!');
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

export default app;