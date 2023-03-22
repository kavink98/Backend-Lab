import express, { Express, Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
    time?: number;
  }

const app = express();

app.listen(3000);

app.get('/html', (req: Request, res: Response) => {
    res.send('<html><body><h1>Hello World!</h1></body></html>');
})

app.get('/json', (req:Request, res: Response) => {
    res.send({firstName: 'John', lastName: 'doe'});
})

app.get('/toronto+team', (req: Request, res: Response) => {
    res.send('<html><body><h1>Go Toronto!</h1></body></html>')
})

const requestTime = (req: CustomRequest, res: Response, next: NextFunction) => {
    req.time = Date.now();
}

app.use(requestTime);

app.get('/greet', (req: CustomRequest, res: Response) => {
    console.log('GET recieved: ', req.time);
    res.send('Hello World!');
})