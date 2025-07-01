const { registerMediator } = require('openhim-mediator-utils');
const bodyParser = require('body-parser');
const { mediatorConfig } = require('./mediatorConfig');
const { PORT, OPENHIM } = require('./config');
const os = require('os');
import express, {Request, Response} from 'express';

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*', (_: Request, res: Response) => {
  res.send('Hello World')
});


if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  
  registerMediator(OPENHIM, mediatorConfig, (err: any) => {
  if (err) {
    throw new Error(`Failed to register mediator. Check your Config. ${err}`)
  }
  console.log("Successful registration")
});
}

export default app;
