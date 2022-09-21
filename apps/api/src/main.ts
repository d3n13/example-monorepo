import * as express from 'express';
import { Message } from '@example/api-interfaces';

const app = express();

app.get('/api', (req, res) => {
  const message: Message = { message: 'Read!' };
  res.send(message);
});

app.post('/api', (req, res) => {
  const message: Message = { message: 'Created!' };
  res.send(message);
});

app.put('/api', (req, res) => {
  const message: Message = { message: 'Updated!' };
  res.send(message);
});

app.delete('/api', (req, res) => {
  const message: Message = { message: 'Deleted!' };
  res.send(message);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
