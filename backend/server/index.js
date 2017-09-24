import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { MeetupRoutes, GroupRoutes } from './modules';

const app = express();
const PORT = process.env.PORT || 3000;

// Database
dbConfig();

// Middlewares
middlewaresConfig(app);

app.use('/api', [MeetupRoutes, GroupRoutes]);

app.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`App listening on port: ${PORT}`);
});
