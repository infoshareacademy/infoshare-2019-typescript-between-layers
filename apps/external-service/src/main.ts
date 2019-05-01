import * as express from 'express';
import { NotWhatYouExpected } from './response.model';

const app = express();

app.get('/api/payments', (req, res) => {
  const response: NotWhatYouExpected[] = [
    { id:  5, vendorId: 100, payerId: 200, currencyISO: 'PLN', value: '1000' },
    { vendorId: 101, payerId: 201, currencyISO: 'EUR', value: '1001' }
  ];

  res.send(response);
});

const port = process.env.port || 4444;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`External service listening at http://localhost:${port}`);
});
