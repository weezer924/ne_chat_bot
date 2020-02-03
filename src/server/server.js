import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join('./', 'dist')));
// app.set('trust proxy', true);

app.get('/api', (req, res) => {
  res.send({api: 'test'});
})

app.get('/history/list', (req, res) => {
  res.send({api: 'test2'});
})

app.post('/chat', (req, res) => {
  res.send({api: 'test3'});
})

app.get('*', function (req, res) {
  res.sendFile(path.join('./', 'dist', 'index.html'))
})

app.listen(3000, ()=> {
  console.log('server running');
})